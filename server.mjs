//----------{Trying out the use of .mjs files instead of using the require() syntax}
//---------------------VV---Importing at top of file per convention
import 'dotenv/config'
import express from 'express'; 
import connectToDatabase from './config/connectToDataBase.mjs';
import cors from 'cors'
// import

//---------------VV-------------------Start of application; define app by express, define port by .env 
const app = express();
const port = process.env.PORT || 3000;

//-----------------VV------ensures that "app" will convert data into json {no longer need body-parser}
app.use(express.json())

//---------------VV----------------------------------------Ensures "Cross-Origin Resource Sharing".  
app.use(cors())
/*This is something that isn't needed on just backends, if they are only being used internally 
and not being connected to a frontend. I am not sure how the project will be tested by Per-Scholas, 
so including it just incase. */

//-------------VV------------------Add mongo Database by starting the function
connectToDatabase()

//-----------------VV----------------Routes
app.use('/', (req, res) => {
    res.send("Index Page")
});

//-------------------------VV-----------------Listening/Start Server
app.listen(port, () => {
    console.log(`Listening to server on ${port}`);
});