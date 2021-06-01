import { Pool } from 'pg'

export const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'admin',
    database:'bdalumno',
    port:5432
});