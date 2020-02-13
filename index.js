const express= require('express');
const mongoose = require('mongoose');

const UserRouter = require('./routes/users');
const auth = require('./routes/auth');
const doctorRouter = require('./routes/doctors');
const DogBreedRouter = require('./routes/dogbreed');
const PuppyRouter = require('./routes/puppy');
const trainingsRouter = require('./routes/traininglist');
const PetRouter = require('./routes/pet');
const TreatmentRouter = require('./routes/treatment');
const DogregisterRouter = require('./routes/dogregister');
const AppointmentRouter = require('./routes/appointment');
const ProductRouter = require('./routes/product');


const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const cors = require('cors');


mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((DB) =>
{
console.log("Sucessfully connected mongodb server");
})



const app = express();
app.use(express.json());
app.options('*',cors());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));





app.use('/users',UserRouter);
app.use('/upload',uploadRouter);
app.use('/doctors',doctorRouter);
app.use('/dogbreed',DogBreedRouter);
app.use('/puppy',PuppyRouter);
app.use('/training', trainingsRouter);
app.use('/pet',PetRouter);
app.use('/treatment',TreatmentRouter);
app.use('/product',ProductRouter);
app.use(auth.verifyUser);
app.use('/dogregister',DogregisterRouter);
app.use('/appointment',AppointmentRouter);



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
})
  
app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
})