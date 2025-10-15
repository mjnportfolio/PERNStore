import { neon } from "@neondatabase/serverless"
import dotenv from "dotenv"

dotenv.config();

// creates a SQL connection using our env variable
export const sql = neon(process.env.DB_URI);