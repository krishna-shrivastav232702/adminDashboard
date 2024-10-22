import mongoose,{Schema} from "mongoose";

const TransactionSchema = new mongoose.Schema(
    {
        userId:String,
        cost:String,
        Products:[{
            type:Schema.Types.ObjectId, 
            ref:"Product"
        }]
    },{
        timestamps:true,
    }
);

const Transaction = mongoose.model("Transaction",TransactionSchema);

export default Transaction;