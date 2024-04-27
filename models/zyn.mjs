import mongoose from 'mongoose';

const zynSchema = new mongoose.Schema({
    //This is using mongoose built in "SchemaType"  Allows setting certain data validations and defaults
    name: {type: String, default: 'Zyn'},
    //The min/max ensure a date can't be given before the min date, and can't be given after the max 
    //date (which is set to whatever the current date is)
    release_Date: {type: Date, min: '2014-01-01', max: Date.now},
    flavor: {type: String, default: 'Zyn'},
    //The [String] allows someone to enter an array of strings instead of a single value.  
    //Enum checks if the values entered match 1 or more of the values in the enum array
    strength_Options: {type: [String], enum: ['3mg', '6mg'] },
});

const Zyn = mongoose.model('Zyn', zynSchema);

export default Zyn;
