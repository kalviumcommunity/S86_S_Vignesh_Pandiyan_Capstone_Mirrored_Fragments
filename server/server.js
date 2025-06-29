const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const playerStats = require('./routes/status')

const app = express();

app.use(express.json());
app.use('/api/stats',playerStats);

const PORT = process.env.PORT  || 3000

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("DB Connection Error:", err));


app.get('/',(req,res)=>{
    return res.send({message:"Welcome To Mirrored Fragments Server!"});
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})