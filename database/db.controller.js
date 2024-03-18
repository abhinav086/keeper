import mongoose from "mongoose";


export const dbConnection = async (URI) => {
    try{
        await mongoose.connect(URI)
        console.log('connected to database')
    }

    catch (error){
        console.log(error)

    }

}
