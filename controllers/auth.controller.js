const db = require('../bd');
const bcrypt = require('bcrypt');
const jwtTokens = require('../utils/jwt.helpers')

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        const users = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
        if (users.rows.length === 0) return res.status(401).json({ error: "Почта не найдена" })
        const validPassword = await bcrypt.compare(password, users.rows[0].password)
        if (!validPassword) return res.status(401).json({ error: "Пароль введет не правильно" })
       
    }
}

module.exports = new AuthController()