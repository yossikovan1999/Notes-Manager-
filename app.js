<<<<<<< HEAD
import express from "express";
import notesRoute from "./routes/noteRoutes.js";

const PORT = 3001;

const app = express()

app.use(express.json());



app.use("/notes", notesRoute);



app.listen(PORT, ()=>{

    console.log("running on port")
})
=======
import express from 'express';
import  {registerRouter} from './routes/userRoutes.js';

const app = express()
const PORT = 3000;

app.use(express.json());

app.use('/register',  registerRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
>>>>>>> 5ce37daad8b35b97d499f0e9adf8e127c69671cd
