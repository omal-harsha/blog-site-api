import { db } from '../db.js';
import bcrypt from "bcrypt"


export const adduser = (req,res) => {
    
    // Set cookie
  res.cookie('username', 'faad', { 
    maxAge: 900000, // 15 minutes
    httpOnly: true,
  });

  // Send response
  res.send('Cookie has been set');
  
  //res.status(200).json({ message: 'Login successful' });
   
}