import mongoose from "mongoose";


export default async () => {
    try {
        const DB_OPTION = {
            dbName: process.env.dbName
        }
        await mongoose.connection(process.env.DATABASE_URL, DB_OPTION)
        console.log('DB CONNECTED SUCCESSFULLY!')
    } catch (error) {

    }
}
