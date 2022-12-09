import { Request, Response } from 'express'
import { User } from '../entities/User'

export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {

    const { firstname, lastname } = req.body

    const user = new User()
    user.firstname = firstname
    user.lastname = lastname

    await user.save()

    console.log(user)

    return res.status(200).json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const user = await User.findOneBy({ id: parseInt(req.params.id) })

    if (!user) return res.status(404).json({ message: 'User does not exists' })

    await User.update({ id: parseInt(id) }, req.body)

    return res.sendStatus(204)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await User.delete({ id: parseInt(id) })

    return res.status(200).json(result)

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}