import {pool} from '../database'

export const getAlumno = async(req, res)=>{
    try {
        const responce = await pool.query('select * from alumno');
        return res.status(200).json(responce.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error..!');
    }
}