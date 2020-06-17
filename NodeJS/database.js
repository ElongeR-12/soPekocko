// request for mongoose
const mongoose = require('mongoose');
// make connection to db by moogose then we can add parameter err
mongoose.connect('mongodb+srv://Elonge1:Elonge@cluster-p-six-oc-kum0q.mongodb.net/Elonge1?retryWrites=true&w=majority', (err) => {
    if(!err)
        console.log('MongoDB connection succeeded');
    else
        console.log('Error in DB connection:' + JSON.stringify(err, undefined,2));
} );

module.exports = mongoose;