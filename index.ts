import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as StoreController from './src/api/StoreController';


const PORT = 3001;

async function startup() {
    await createConnection();
    const app = express();

    app.use(express.json());
    app.use(cors());
    // salved store in dataBase
    app.post("/store", StoreController.save);
    //  get all list store
    app.get("/store", StoreController.getAll)


    app.listen(PORT, () => {
        console.log('App running on port ' + PORT);
    });
}

startup();