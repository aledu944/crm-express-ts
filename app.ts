import express from "express";
import dotenv from 'dotenv'
import AppRoutes from './src/routes/routes'

dotenv.config();

const app = express();

app.use('/api', AppRoutes )

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
})
