import User from "../models/user.model.js";
import OverallStat from "../models/overallStat.model.js" 
import Transaction from "../models/transaction.model.js"

export const getUser = async(req,res)=>{
    try {
        const {id}= req.params;
        const user= await User.findById(id);
        res.status(200).json(user);

    } catch (err) {
        res.status(404).json({message:err.message})
    }
}

export const getDashboardStats=async(req,res)=>{
    try {
        //hardcoded values
        const currentMonth = "October";
        const currentYear = 2021;
        const currentDay  = "2021-11-15";
        
        //recent transactions

        const transactions = await Transaction.find().limit(50).sort({createdOn:-1});

        //overall stats
        const overallStat = await OverallStat.find({year:currentYear})

        const {totalCustomers,yearlyTotalSoldUnits,yearlySalesTotal,monthlyData,salesByCategory}= overallStat[0]
        const thisMonthStats = overallStat[0].monthlyData.find(({month})=>{
            return month === currentMonth;
        });

        const todayStats = overallStat[0].dailyData.find(({date})=>{
            return date === currentDay;
        });

        res.status(200).json({totalCustomers,yearlyTotalSoldUnits,yearlySalesTotal,monthlyData,salesByCategory,thisMonthStats,todayStats,transactions})


    } catch (error) {
        res.status(403).json({message:error.message});
    }
}