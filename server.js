import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
// import timeRouter from './routes/time.routes';
// import workRouter from './routes/work.routes';
// import authRouter from './routes/auth.routes';

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', userRouter);
// app.use('/api', timeRouter);
// app.use('/api', workRouter);
// app.use('/api', authRouter);

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`listening on port ${PORT}`));
    }
    catch (e) {
        console.log(e)
    }
}
start()
