import { DataSource } from "typeorm"
import { User } from './entities/User'

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: 'root',
  password: 'micontraseña',
  port: 3306,
  database: 'typeorm',
  entities: [User],
  logging: false,
  synchronize: true,
  //options: { encrypt: false }
})