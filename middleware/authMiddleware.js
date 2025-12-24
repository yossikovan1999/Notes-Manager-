import {readUsersAsync} from "../utils/jsonHanlder.js";

/**
 * validate student exist middleware.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export async function authUser(req, res, next) {
  
  console.log("here 1");
  const students = await readUsersAsync();

  const username = req.header("user-auth");

  if (!username) {
    return res.status(400).json({ message: "username not included in header." });
  }

  const student = students.find((student) => student.username === username);

  if (!student) {
    return res.status(404).json({ message: "student must exist before adding a note." });
  }

  next();
}
