import "dotenv/config";



export const DB_URL: string | undefined = process.env.DB_URL;
export const DB_TYPE: 'postgres' | 'mysql' = process.env.DB_TYPE as 'postgres' | 'mysql';
export const DB_HOST: string = process.env.DB_HOST || 'localhost';
export const DB_PORT: number = parseInt(process.env.DB_PORT || '5432', 10);  
export const DB_USERNAME: string = process.env.DB_USERNAME || 'postgres';  
export const DB_PASSWORD: string = process.env.DB_PASSWORD || '';
export const DB_NAME: string = process.env.DB_NAME || 'my_database'; 
export const DB_SYNC: boolean = process.env.DB_SYNC === 'true'; 
export const DB_LOGGING: 'error' | 'all' | 'none' = process.env.DB_LOGGING as 'error' | 'all' | 'none' || 'error'; 
export const DB_DROP: boolean = process.env.DB_DROP === 'true';

const entitiesPath = process.env.NODE_ENV === 'production'
    ? 'dist/entities/**/*.js'  
    : 'src/entities/**/*.ts';  

export const DB_ENTITIES: string[] = [entitiesPath];




