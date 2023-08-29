import db from '../bd.js';
import bcrypt from 'bcrypt';
const UserController = {
    async createUser(req, res) {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (user.rows.length !== 0) return res.status(401).json({ error: "Почта уже существует" })
        const newUser = await db.query('INSERT INTO users (name, email, password) values ($1,$2, $3) RETURNING *', [name, email, hashedPassword])
        res.json(newUser.rows[0])
    },
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    },
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows[0])
    },
    async updateUser(req, res) {
        const { id, name, email } = req.body
        const user = await db.query('UPDATE users SET name = $1, email = $2 where id = $3 RETURNING *', [name, email, id])
        res.json(user.rows[0])
    },
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1', [id])
        res.json(user.rows[0])
    }
}

export default UserController