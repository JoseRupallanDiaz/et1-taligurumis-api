import express from 'express'
import mongoDB from './src/configs/mongo.js'
import {PORT, ASCII} from './src/configs/enviorment.js'

const app = express();

app.use(express.json());

async function startServer() {
    console.log(ASCII)
    const isConnected = await mongoDB()
    if (isConnected) {
        app.listen(PORT, () => {
            console.log('Server running successfully at port '+PORT);
        })
    } else {
        process.exit()
    }
};

startServer();