const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('BD conectada')
    }catch (Error){
        console.log(Error);
        process.exit(1); //detiene app
    }
}
module.exports = conectarDB