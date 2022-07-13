import mongoose from "mongoose";

// const { API_KEY} = process.env
(async () => {
    try {
        const db = await mongoose.connect(`mongodb+srv://mathyled:EVRdaTM95C81FYrW@cluster0.m5nmi.mongodb.net/?retryWrites=true&w=majority`)
        console.log(`DB connected to ${db.connection.name}`)
    } catch (error) {
        console.log(error)
    }
})()