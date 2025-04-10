import { DataSource, Repository } from "typeorm"
import { User } from "../entities/User"
import { Credential } from "../entities/Credential"
import { DB_DROP, DB_SYNC, DB_TYPE, DB_URL, DB_ENTITIES } from "./envs"
import { Appointment } from "../entities/Appointment"


export const AppDataSource = new DataSource({

    type: DB_TYPE,
    url: DB_URL,
    synchronize: DB_SYNC,
    entities: [User, Credential, Appointment],
    dropSchema: DB_DROP,
   
})


export const UserModel: Repository<User> = AppDataSource.getRepository(User);
export const CredentialModel: Repository<Credential>= AppDataSource.getRepository(Credential);
