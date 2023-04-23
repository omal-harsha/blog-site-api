import express  from "express";

import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express()
app.use(cors());

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)




  app.post('/test', (req, res) => {
    // Set cookie
  res.cookie('username', 'john', { 
    maxAge: 900000, // 15 minutes
    httpOnly: true,
    secure: true,
    sameSite: 'none'
  });

  // Send response
  res.send('Cookie has been set');
  })



app.listen(8800, () =>{
    console.log("connected")
})