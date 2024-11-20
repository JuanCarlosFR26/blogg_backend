import 'dotenv/config';
import express from 'express';
import routes from './src/routes/routes.js';
// import { PrismaClient } from '@prisma/client/extension';

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());


app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is runing on http://localhost:${PORT}`);
})