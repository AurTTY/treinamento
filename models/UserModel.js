import pool from '../config/database.js';

class UserModel {
    static async findAll() {
        const { rows } = await pool.query('SELECT * FROM USUARIOS');
        return rows;
    }

    static async create({ nome, email, idade }) {
        const { rows } = await pool.query(
            'INSERT INTO USUARIOS (nome, email, idade) VALUES ($1, $2, $3) RETURNING *',
            [nome, email, idade]
        );
        return rows[0];
    }

    static async update(id, { nome, email, idade }) {
        const { rows } = await pool.query(
            'UPDATE USUARIOS SET nome = $1, email = $2, idade = $3 WHERE id = $4 RETURNING *',
            [nome, email, idade, id]
        );
        return rows.length > 0 ? rows[0] : null;
    }

    static async delete(id) {
        const { rowCount } = await pool.query(
            'DELETE FROM USUARIOS WHERE id = $1',
            [id]
        );
        return rowCount > 0;
    }
}

export default UserModel;