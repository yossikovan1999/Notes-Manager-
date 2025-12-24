import fs from 'fs/promises';
import path from 'path';


const dataDir = path.resolve( './data');
const usersFile = path.join(dataDir, 'users.json');
const notesFile = path.join(dataDir, 'note.json');


export function ensureFiles() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, '[]', 'utf-8');
  }
  if (!fs.existsSync(notesFile)) {
    fs.writeFileSync(notesFile, '[]', 'utf-8');
  }
}



async function readUsersAsync() {
  try {
    const raw = await fs.readFile(usersFile, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}


export async function writeUsersAsync(users) {
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), 'utf-8');
}


export async function readNotesAsync() {
  try {
    const raw = await fs.readFile(notesFile, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}


export async function writeNotesAsync(notes) {
  await fs.writeFile(notesFile, JSON.stringify(notes, null, 2), 'utf-8');
}


export function genId(fix){
    const random = Math.floor(Math.random()*10000).toString(10);
    return `${fix}${Date.now().toString(10)}${random}`;
    }

