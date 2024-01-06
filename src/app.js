import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

// database name --> youtubedb

// this use for cross origin sharing 
app.use(cors({ origin: process.env.CORS_ORIGIN}))
// this middleware use for parsing the json data
app.use(express.json({limit:"16kb"}))
// this is used for parsing url data extended is used for nessted object
app.use(express.urlencoded({extended: true}))
// this is used for accessing public resources from server
app.use(express.static("public"))

export default app