import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT
const MONGOURI = process.env.DATABASE
const ASCII = process.env.ASCII

export {PORT, MONGOURI, ASCII}