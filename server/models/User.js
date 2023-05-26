import moongoose from "mongoose";

const UserSchema = moongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  city: String,
  state: String,
  country: String,
  ocupation:String,
  phoneNumber: String,
  transactions: Array,
  role:{
    type: String,
    enum:["admin","superadmin","user"],
    default:"admin"
  },
},
{timestamps:true}
);

const User = moongoose.model('User',UserSchema);
export default User;