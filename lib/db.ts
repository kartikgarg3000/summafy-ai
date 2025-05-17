import {neon} from '@neondatabase/serverless';

export async function getDbConnection(){
    if(!process.env.DATABASE_URL){
        throw new Error('Database URL is missing')
    }
    const sql = neon(process.env.DATABASE_URL);
    return sql;
}
