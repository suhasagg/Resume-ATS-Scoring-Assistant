import {MongoClient} from "mongodb"; let client;
export async function db(){ if(!client){client=new MongoClient(process.env.MONGO_URL||"mongodb://localhost:27017/ats");await client.connect();} return client.db(); }
