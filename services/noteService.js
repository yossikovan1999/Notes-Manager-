import HttpError from "../errors/HttpError.js";

import { v4 as uuidv4 } from 'uuid';

/**
 * add note
 * @param {*} owner - owner name (unique)
 * @param {*} content - content to add to the 
 */
export async function addNote(owner, content){

    //read all the notes from the file
    const notes = [];
    
    if(!owner || !content){
        throw new HttpError("content and ower must exist", 400); 
    }

    const note = {id : uuidv4(), owner : owner, content : content};

    //add to notes file here

}


export async function getAllNotes(){

    
}