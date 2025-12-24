import express from "express";
import {authUser} from "../middleware/authMiddleware.js";
import * as notesService from "../services/noteService.js";

const notesRoute = express.Router()


/**
 * get all notes route
 */
notesRoute.get("/", authUser, async (req, res)=>{
    
    try{
       const notes = await notesService.getAllNotes();
       return res.status(200).json(notes);
    }catch(error){
        return res.status(error.code || 500).json({message : error.message});
    }
})


/**
 * post a note route
 */
notesRoute.post("/", authUser, async (req, res)=>{

    try{
        const {content} = req.body;
        const owner = req.headers["user-auth"];
        await notesService.addNote(owner, content);
        return res.status(200).json({message : "note added successfully."});
    }catch(error){
        return res.status(error.code || 500).json({message : error.message});
    }
})

export default notesRoute;