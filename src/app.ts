import { Server } from './model/server';
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const { PORT } = process.env;
const server = new Server( Number(PORT) );
server.listen();