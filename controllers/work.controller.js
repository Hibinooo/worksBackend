import db from '../bd.js';

const WorkController = {
    async createWork(req, res) {
        const { fullDate, userId, timesId } = req.body
        const newWork = await db.query('INSERT INTO work (date_time, user_id, times_id) values ($1,$2,$3) RETURNING *',
            [fullDate, userId, timesId])
        res.json(newWork.rows)
    },
    async getWork(req, res) {
        const userId = req.query.id
        const startDate = req.query.startdate
        const endDate = req.query.enddate
        const work = await db.query('SELECT * FROM work where user_id = $1 and date_time BETWEEN $2 AND $3', [userId, startDate, endDate])
        res.json(work.rows)
    }
}
export default WorkController

