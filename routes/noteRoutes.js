import express from "express";
import {validateStudentExists} from "../middleware/studentMiddleware.js";
import * as notesService from "../services/noteService.js";

const notesRoute = express.Router()



notesRoute.get("/", )


notesRoute.post("/", validateStudentExists, async (req, res)=>{

    try{
        const {owner, content} = req.body;
        const notes = await notesService(owner, content);
        return res.status(200).json({message : "note added successfully."});
    }catch(error){
        return res.status(error.code || 500).json({message : error.message});
    }
})