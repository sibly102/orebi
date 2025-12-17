import userModel from '../models/userModel.js'
import validator from 'validator';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const createToken = (user) => {
  return jwt.sign({
    _id:user._id,
    email:user.email,
    name:user.name,
  },
  process.env.JWT_SECRET,
  { expiresIn: "10h" }
)
}
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email){
            return res.json({
                success: false,
                message: "Email is required",
            });
        }
        if (!password){
            return res.json({
                success: false,
                message: "Password is required",
            });
        }

        // if user exist
      const user = await userModel.findOne({ email });
      if(!user) {
        return res.json({
            success: false,
            message: "User does not exits",
        });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if(isMatch) {
        const token = createToken(user)
        res.json({
            success: true,token,
            message: "User logged in successfully",
        });
      } else {
        return res.json({
            success: false,
            message: "Invalid Credential, try again",
        });
      }

    } catch (error) {
        console.log("User Login Error", error);
        res.json({ success: false, message: error?.message})
    }

};
const userRegister = async (req, res) => {
    try {
        const { name, email, password} = req.body;

        //required body verification
        if(!name){
            return res.json({
                success: false,
                message: "Name is required",
            });
        }
        if (!email){
            return res.json({
                success: false,
                message: "Email is required",
            });
        }
        if (!password){
            return res.json({
                success: false,
                message: "Password is required",
            });
        }

        const existingUser = await userModel.findOne({ email });

          //Email validation
           if (!validator.isEmail(email)) {
              return res.json({
               success: false,
               message: "Please enter a valid email address",
             });
              }
            //check user status
             if (existingUser) {
               return res.json({
                success: false,
                message: "User already exists",
                });
              }
  
          //hashing user password validation
           const salt = await bcrypt.genSalt(10);
           const hash = await bcrypt.hash(password, salt);
         //Register a new user
         const newUser = new userModel({
            name,
            email,
            password: hash,
         });
         //save user in database
         await newUser.save();
         
        return res.json({
             success: true,
             message: "API connected successfully",
        });
    } catch (error) {
        console.log("User Register Error", error);
        res.json({ success: false, message: error?.message})
    }
};
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(
            email === process.env.ADMIN_EMAIL && 
            password === process.env.ADMIN_PASSWORD
        ){
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({
            success: true,
            message: "Welcome Admin panel"
        });
        } else (
            res.json({
                success: false,
                message: 'Admin credential invalid',
            })
        )
        
    } catch (error) {
        console.log("Admin Login error", error);
        res.json({
            success: false,
            message: error.message,
        });
    }
};
const removeUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.body._id)
        res.json({
            success: false,
            message: "User deleted successfully."
        });
    } catch (error) {
        console.log("Removed user Error", error);
        res.json({ success: false, message: error.message})
    }
};
const updateUser = async (req, res) => {
    try {
        const { _id, name, email, password } = req.body;
        const user = await userModel.findById(_id);
        if(!user) {
           return res.json({ success: false, message: "User not found"});
        }
        //name
        if(name) user.name = name;
        //Email
        if(email) {
            if(!validator.isEmail(email)){
                return res.json({
                    success: false,
                    message: "Please enter your valid Email Address",
                });
            }
            user.email = email;
        }
        if(password) {
            if(password.length < 8){
                return res.json({
                    success: false,
                    message: "Password length should be more than 8 character"
                })
            }
            const salt = await bcrypt.genSaltSync(10);
            user.password = await bcrypt.hash(password, salt);
        }

        //updating the user
        await user.save();
        res.json({
            success: true,
            message: "User updated successfully",
        });
    } catch (error) {
       console.log("Update user", error);
       res.json({ success: false, message: error.message}) 
    }
};
const getUsers = async (req, res) => {
    try {
        const total = await userModel.countDocuments({});
        const users = await userModel.find({});
        res.json({ success: true, total, users });
    } catch (error) {
        console.log("All users get error", error)
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export {
    userLogin,
    userRegister,
    adminLogin,
    removeUser,
    updateUser,
    getUsers,
};