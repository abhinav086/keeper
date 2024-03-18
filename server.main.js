import { dbConnection } from './database/db.controller.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { routes } from './routes/server.route.js';
dotenv.config()
const app = express();
const port = 3000; // Choose any available port

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001'
}))

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    dbConnection(process.env.MONGOURL)
});

routes(app);

