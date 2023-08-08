import db from '../bd.js';
import bcrypt from 'bcrypt';
const UserController = {
    async createUser(req, res){
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const {name, email} = req.body
        const newPerson = await db.query('INSERT INTO users (name, email, password) values ($1,$2, $3) RETURNING *',[name, email, hashedPassword])
        res.json(newPerson.rows[0])
    },
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    },
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows[0])
    },
    async updateUser(req, res){
        const {id, name, email} = req.body
        const user = await db.query('UPDATE users SET name = $1, email = $2 where id = $3 RETURNING *', [name, email, id])
        res.json(user.rows[0])
    },
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1', [id])
        res.json(user.rows[0])
    }
}

export default UserController