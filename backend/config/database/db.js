const mongooseODM = require('mongoose');

const connectDB = async () => {
    try {
        const mongoDbConnection = await mongooseODM.connect(process.env.MONGOURL)
        console.log(`MongoDB Connected: ${mongoDbConnection.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB;