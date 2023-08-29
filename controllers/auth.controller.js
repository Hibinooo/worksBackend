import db from '../bd.js';
import bcrypt from 'bcrypt';
import jwtTokens from '../utils/jwt.helpers.js'
import jwt from 'jsonwebtoken'

const AuthController = {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email])
            if (user.rows.length === 0) return res.status(401).json({ error: "Почта не найдена" })
            const validPassword = await bcrypt.compare(password, user.rows[0].password)
            if (!validPassword) return res.status(401).json({ error: "Пароль введет не правильно" })
            let token = jwtTokens(user.rows[0])
            res.cookie('refresh_token', token.refreshToken, { httpOnly: true });
            res.json(token.accessToken)
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    },
    async refresh(req, res) {
        try {
            const refreshToken = req.cookies.refresh_token;
            if (refreshToken === null) return res.status(401).json({ error: "null ref token" })
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
                if (error) return res.status(403).json({ error: error.message });
                let token = jwtTokens(user)
                res.cookie('refresh_token', token.refreshToken, { httpOnly: true, sameStime: "none", secure: true });
                res.json(token.accessToken)
            })
        } catch (error) {
            res.status(401).json({ message: error.message })
        }
    }
}

export default AuthController