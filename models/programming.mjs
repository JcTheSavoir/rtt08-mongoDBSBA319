import mongoose from 'mongoose' ;

const programmingSchema = new mongoose.Schema({
    name: String,
    release_Date: Date,
    current_Version: String,    
    usage: String,
});

const Programming = mongoose.model("Programming", programmingSchema);

export default Programming;