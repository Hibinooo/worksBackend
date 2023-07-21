const express = require('express');
const userRouter = require('./routes/user.routes');
const timeRouter = require('./routes/time.routes');
const workRouter = require('./routes/work.routes');

const PORT = process.env.PORT || 5000

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', timeRouter);
app.use('/api', workRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
