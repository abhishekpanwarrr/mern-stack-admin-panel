import moongoose from "mongoose";

const OverallStatSchema = moongoose.Schema(
  {
    totalCustomer: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year:Number,
    monthlyData: [
        {
          month: String,
          totalSales: Number,
          totalUnits: Number,
        },
      ],
      dailyData: [{
        date: String,
        totalSales: Number,
        totalUnits: Number,
      }],
      salesByCategory: {
        type:Map,
        of: Number,
      },
  },
  { timestamps: true }
);

const OverallStat = moongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;
