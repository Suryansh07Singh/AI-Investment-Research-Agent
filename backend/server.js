import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeRoute from "./routes/analyzeRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
console.log(process.env.GOOGLE_API_KEY);
// Routes
app.use("/api", analyzeRoute);

// Health check
app.get("/", (req, res) => {
    res.send("Investment AI Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});