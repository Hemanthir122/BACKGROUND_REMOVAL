import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/mongodb.js";

// APP CONFIGURATION
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// API ROUTES
app.get("/", (req, res) => {
    res.send("hello");
});

// START THE SERVER
app.listen(PORT, () => console.log("Server running on port", PORT));
