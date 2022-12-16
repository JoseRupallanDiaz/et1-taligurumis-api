import express from 'express'
import mongoDB from './src/configs/mongo.js'
import {PORT, ASCII} from './src/configs/enviorment.js'
import orderRouter from './src/routes/order.route.js'
import userRouter from './src/routes/user.route.js'
import fileRouter from './src/routes/file.route.js'
import {createDefaultAdmin} from './src/controllers/user.controller.js'

const app = express()

app.use(express.json())
app.use('/orders', orderRouter)
app.use('/', userRouter)
app.use('/img', fileRouter)

async function startServer() {
    console.log(ASCII)
    const isConnected = await mongoDB()
    if (isConnected) {
        registerModels()
        createDefaultAdmin()
        app.listen(PORT, () => {
            console.log('Server running successfully at port '+PORT);
            console.log('-> to finish this process use CTRL+C')
        })
    } else {
        process.exit()
    }
};

async function registerModels(){
    await import('./src/models/user.model.js')
    await import('./src/models/review.model.js')
    await import('./src/models/order.model.js')
}

startServer();