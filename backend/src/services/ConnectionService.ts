import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const DB_CONFIG = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@notepadsample.lwk6sib.mongodb.net/notepad?retryWrites=true&w=majority&appName=NotepadSample`;
class ConnectionService {
  static connect(): void {
    mongoose.connect(DB_CONFIG);
  }
}

export { ConnectionService }