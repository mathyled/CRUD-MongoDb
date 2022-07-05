import mongoose from "mongoose";

(async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://mathyled:UaLzS528uwaNAFh@cluster0.xatly.mongodb.net/?retryWrites=true&w=majority')
        console.log(`DB connected to ${db.connection.name}`)
    } catch (error) {
        console.log(error)
    }
})()