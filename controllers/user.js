import { db } from '../db.js';
import bcrypt from "bcrypt"


export const adduser = (req,res) => {
    const x = req.body.one
    // Set cookie
  res.cookie('username', x, { });

  // Send response
  res.send('Cookie has been set');
  
 //return res.status(200).json({ message: 'Login successful' });
   
}