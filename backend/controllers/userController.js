import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req,res) => {

  try {

    const {email,password} = req.body;

    const user = await userModel.findOne({email});  

    if (!user) {
      return res.json({success:false, message:"User doesn't exists"})
    }
    
   const isMatchh = await bcrypt.compare(password,user.password);

   if (isMatchh) {
    const token = createToken(user._id)
    res.json({success:true,token})
   }

   else{
    res.json({success:false, message: 'Incorrect Password'})
   }

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
    
}

//route for user register
const registerUser = async (req,res) => {
 try {
    
   const {name,email,password} = req.body;

   //USER ALREADY EXISTS OR NOT

   const exists = await userModel.findOne({email});
   if (exists) {
    return res.json({success:false, message:"User Already exists"})
   }

   // Vailidating email format & strong password

   if (!validator.isEmail(email)) {
    return res.json({success:false, message:"Please enter vaild email"})
   }
     if (password.length < 8) {
    return res.json({success:false, message:"Please enter strong password"})
   }

   // hashing user password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt)

  const newUser = new userModel({
    name,
    email,
    password:hashedPassword
  })

  const user = await newUser.save()

  const token = createToken(user._id)

  res.json({success:true,token})

 } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
 }

}

// Route for admin login
const adminLogin = async (req,res) => {
    try {
      
     const {email,password} = req.body

     if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({success:true,token})
     } else {
      res.json({success:false,message:"Invaild Password"})
     }

    } catch (error) {
     console.log(error)
    res.json({success:false,message:error.message})
    }
}

// Route for Forgot Password
const forgotPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (newPassword.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

    await user.save();

    res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};



export { loginUser,registerUser,adminLogin,forgotPassword}