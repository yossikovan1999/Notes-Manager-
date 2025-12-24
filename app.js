import express from "express";
import notesRoute from "./routes/noteRoutes.js";

const PORT = 3001;

const app = express()

app.use(express.json());



app.use("/notes", notesRoute);



app.listen(PORT, ()=>{

    console.log("running on port")
})