import express  from "express";

import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";


const app = express()
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true

}));

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../blog-site-ui/public/upload')
  },
  filename: function (req, file, cb) {
  
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({ storage })

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.get('/users/:id', (req, res) => {
  // Get the value of `id` parameter from the request object
  const id = req.params.id;
  
  // Perform some logic based on the value of `id`
  if (id === '1') {
    res.send('User with ID 1');
  } else if (id === '2') {
    res.send('User with ID 2');
  } else {
    res.send('User with unknown ID');
  }
});


app.listen(process.env.PORT || 8800, () =>{
    console.log("connected")
})