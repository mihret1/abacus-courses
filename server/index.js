const studentRoute=require('./routes/student')
const interestedRoute=require('./routes/interested')
const authRoute=require('./routes/auth')

const express= require('express')
const app=express()
const mongoose=require('mongoose')

const PORT=3000
const URL='mongodb://localhost/eagle_training_center'

app.use(express.json())
app.use('/student',studentRoute)
app.use('/interested',interestedRoute)
app.use('/user',authRoute)

mongoose.connect(URL)
        .then(()=>{
            app.listen((PORT),()=>{
                console.log('backend and database is connected')

            })
        })
        .catch((error)=>{
            console.log(error)
        })


// app.listen(PORT,()=>{
//     console.log('backend is connected')
// })