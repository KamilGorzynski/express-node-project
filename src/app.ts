import routes from "./routes/routes";

const express = require('express');

// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.use(routes)

// app.get('/', (req: any, res: any) => {
//   res.send('Hello, World!');
// });

app.listen(port, () => {
  console.log(`Server is running  at http://localhost:${port}`);
});
