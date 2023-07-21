const db = require('../bd');
class UserController{
    async createUser(req, res){
        const {name, email} = req.body
        const newPerson = await db.query('INSERT INTO person (name, email) values ($1,$2) RETURNING *',[name, email])
        res.json(newPerson.rows[0])
    }
    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }
    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res){
        const {id, name, email} = req.body
        const user = await db.query('UPDATE person SET name = $1, email = $2 where id = $3 RETURNING *', [name, email, id])
        res.json(user.rows[0])
    }
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()