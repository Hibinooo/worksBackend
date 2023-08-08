import db from '../bd.js';
const TimeController = {
    async createTime(req, res){
        const {color, price, userId, title} = req.body
        const newTime = await db.query('INSERT INTO times (color, price, user_id, title) values ($1,$2,$3,$4) RETURNING *',[color, price, userId, title])
        res.json(newTime.rows)
    },
    async getTime(req, res){
        const userId = req.query.id
        const work = await db.query('SELECT * FROM times where user_id = $1 ORDER BY id', [userId])
        res.json(work.rows)
    },
    // async deleteTime(req, res){
    //     const timesId = req.query.timesId
    //     const work = await db.query('SELECT * FROM times where user_id = $1', [timesId])
    //     res.json(work.rows)
    // }
    async updateTime(req, res){
        const {color, price, title, id} = req.body
        const updateTime = await db.query('UPDATE times SET color = $1, price = $2, title = $3   WHERE id = $4  RETURNING *', [color, price, title, id])
        res.json(updateTime.rows)
    }
}

export default TimeController