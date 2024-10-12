const studentRoute=require('./routes/student')
const interestedRoute=require('./routes/interested')
const authRoute=require('./routes/auth')
const cors=require('cors')
const express= require('express')
const app=express()
const mongoose=require('mongoose')

require('dotenv').config()
const PORT=process.env.PORT || 4000
const URL='mongodb://localhost/eagle_training_center'

app.use(cors())
app.use(express.json())
app.use('/student',studentRoute)
app.use('/interested',interestedRoute)
app.use('/user',authRoute)

mongoose.connect(URL)
        .then(()=>{
            app.listen((PORT),()=>{
                console.log(`backend run on ${PORT} and database is connected`)

            })
        })
        .catch((error)=>{
            console.log(error)
        })


// app.listen(PORT,()=>{
//     console.log('backend is connected')
// })