import express from 'express';
import  {registerRouter} from './routes/userRoutes.js';

const app = express()
const PORT = 3000;

app.use(express.json());

app.use('/register',  registerRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
