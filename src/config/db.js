import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const dbUrl = process.env.DB_URL;
        if (!dbUrl) {
            throw new Error("DB_URL is not defined in the environment variables");
        }
        await mongoose.connect(dbUrl, {
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
}
