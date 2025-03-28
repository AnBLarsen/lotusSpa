import { DataSource, Repository } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { Appointment } from "../entities/Appointment"
import { DB_NAME, DB_DROP, DB_ENTITIES, DB_HOST, DB_LOGGING, DB_PASSWORD, DB_PORT, DB_SYNC, DB_TYPE, DB_USERNAME } from "./envs"


export const AppDataSource = new DataSource({

    type: DB_TYPE,
    host:DB_HOST ,
    port: DB_PORT,
    username: DB_USERNAME,
    password:DB_PASSWORD ,
    database: DB_NAME,
    synchronize: DB_SYNC,
    logging: DB_LOGGING,
    entities: DB_ENTITIES,
    dropSchema: DB_DROP,
   
})


export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const CredentialModel: Repository<Credential>= AppDataSource.getRepository(Credential);
