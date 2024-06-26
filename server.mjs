//----------{Trying out the use of .mjs files instead of using the require() syntax}
//---------------------VV---Importing at top of file per convention
import 'dotenv/config';
import express from 'express'; 
import connectToDatabase from './config/connectToDataBase.mjs';
import cors from 'cors';
    //--------------VV-----------------Import of the three routes
import movieRoute from './routes/movie.mjs';
import programmingRoute from './routes/programming.mjs';
import zynRoute from './routes/zyn.mjs';
import documentationRoute from './routes/documentation.mjs';
import expressReactViews from 'express-react-views'

//---------------VV-------------------Start of application; define app by express, define port by .env 
const app = express();
const port = process.env.PORT || 3000;

//-----------------VV------ensures that "app" will convert data into json and works 
// correctly for all Post, put, patch request {no longer need body-parser}
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//---------------------------VV------View template engine{needs to import instead of require express-react-views}
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine())
app.use(express.static('public'));

//---------------VV----------------------------------------Ensures "Cross-Origin Resource Sharing".  
app.use(cors())
/*This is something that isn't needed on just backends, if they are only being used internally 
and not being connected to a frontend. I am not sure how the project will be tested by Per-Scholas, 
so including it just incase. */

//-------------VV------------------Add mongo Database by starting the function
connectToDatabase()

//-----------------VV----------------Routes
app.use('/api/movie', movieRoute);
app.use('/api/programming', programmingRoute)
app.use('/api/zyn', zynRoute);

app.use('/', documentationRoute);

//-------------------------VV-----------------Listening/Start Server
app.listen(port, () => {
    console.log(`Listening to server on ${port}`);
});