
import bcrypt from 'bcryptjs';
import db from './db'; 

async function verifyUser(credentials) {
    const { email, password } = credentials;
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid email or password');
    }
    return user; 
}

async function createUser(credentials) {
    const {email, password, plan} = credentials;
    const hashedPassword = await bcrypt.hash(password, 10); 
    try {
      const stmt = db.prepare('INSERT INTO users (name, email, password, plan) VALUES (?, ?, ?, ?)');
      const result = stmt.run(name, email, hashedPassword, plan);
      return { message: 'User created', userId: result.lastInsertRowid };
    } catch (error) {
       if (error.message.includes('UNIQUE constraint failed')) {
        return { error: 'Email already exists' };
      } else {
        console.error("Signup error:", error);
        return { error: 'Something went wrong' };
      }
    }
} 

module.exports = {createUser, verifyUser}