/**
 * validate student exist middleware.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
export function validateStudentExists(req, res, next) {
  //read the students

  const students = [];

  const { owner } = req.body;

  if (!owner) {
    return res.status(400).json({ message: "owner not included." });
  }

  const student = students.find((student) => student.username === owner);

  if (!student) {
    return res.status(404).json({ message: "student must exist before adding a note." });
  }

  next();
}


