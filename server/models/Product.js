import moongoose from "mongoose";

const ProductSchema = moongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = moongoose.model("Product", ProductSchema);
export default Product;
