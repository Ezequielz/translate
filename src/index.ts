import express from 'express'
import cors from 'cors'
require('dotenv').config();


import openaiRouter from './routes/openai'

const app = express()
app.use(express.json())
app.use(cors())



app.use('/api', openaiRouter)

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on port ${process.env.PORT}`)
})