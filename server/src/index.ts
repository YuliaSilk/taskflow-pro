import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});