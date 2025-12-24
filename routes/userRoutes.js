import { writeUsersAsync,readUsersAsync,genId } from "../utils/jsonHanlder.js";


export async function registerUser(req, res) {
  const { username } = req.body || {};

  if (!username || typeof username !== 'string' || username.trim() === '') {

    return res.status(400).json({ error: 'username is required' });

  }
  const users = await readUsersAsync();

  if (users.find((u) => u.username === username)) {

    return res.status(400).json({ error: 'username already exists' });
  }
  const user = { id: genId('u'), username };

  users.push(user);

  await writeUsersAsync(users);

  return res.status(201).json({ message: 'registered', user });

}
