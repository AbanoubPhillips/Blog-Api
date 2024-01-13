import { User } from "../model/user_model";
import bcrypt from "bcryptjs";

export const getallusers= async(req,res,next)=>{
    let users;
    try {

        users= await User.find();
        if(!users) return res.status(404).json({"massage":"users not found"});
        return res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }  
};

// sign up 
export const signup = async (req, res) => {
  const {name, email, password} = req.body;
  let existuser;
    try {
      existuser = await User.findOne({email});
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      if(existuser){
        return res.status(400).json({massege:"user already exist, try login instead"});
      }
    const hashedpassword = bcrypt.hashSync(password);
        const user = new User({name,email,password:hashedpassword});
        await user.save();
        return res.status(201).json(
          {
          massege:"you are signup succesfully",
          user
        });
     
    } catch (error) {
      return res.status(400).json(error);
    }
  };

// sign in
  export const login = async (req, res,next) => {
    const {email , password} = req.body;
      let existuser;
      try {
        existuser = await User.findOne({email});
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
  
      try {
        if(existuser){
          const getpass = bcrypt.compareSync(password,existuser.password);
          if(!getpass)
          return res.status(400).json({massage:"email or password is incorrect"});

          return  res.status(200).json({
            message:"you are login successfully",
            existuser});

        }
        return res.status(404).json({massege:"user not found, signup first"});
      } catch (err) {
        return res.status(500).json({ error: err.message });
      }
    
    
  };
