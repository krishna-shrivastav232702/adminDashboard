import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.route.js"
import generalRoutes from "./routes/general.route.js"
import managmentRoutes from "./routes/managment.route.js"
import salesRoutes from "./routes/sales.route.js";

//data imports

import User from "./models/user.model.js"
import Product from "./models/product.model.js";
import ProductStat from "./models/productStat.model.js";
import Transaction from "./models/transaction.model.js";
import OverallStat from "./models/overallStat.model.js"
import AffiliateStat from "./models/affiliateStat.model.js"
import {dataUser,dataProduct,dataProductStat,dataTransaction,dataOverallStat,dataAffiliateStat} from "./data/index.js"
 
/*Configurations */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


// Routes

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/managment", managmentRoutes);
app.use("/sales", salesRoutes);

//mongoose setup

const port = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {   //uri,options
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => console.log(`Server Port:${port}`))
    
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // User.insertMany(dataUser);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);

}).catch((err) => console.log(`${err} did not connect`))





