import moongoose from "mongoose";

const ProductStatSchema = moongoose.Schema(
  {
    productId: String,
    yearlySalesTotal: Number,
    yearlySalesTotalUnits: Number,
    year: Number,
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
  },
  { timestamps: true }
);

const ProductStat = moongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;
