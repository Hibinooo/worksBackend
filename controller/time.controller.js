const db = require('../bd');
class TimeController {
    async createTime(req, res){
        const {color, price, userId} = req.body
        const newTime = await db.query('INSERT INTO times (color, price, user_id) values ($1,$2,$3) RETURNING *',[color, price, userId])
        res.json(newTime.rows)
    }
    async getTime(req, res){
        
    }
}

module.exports = new TimeController();