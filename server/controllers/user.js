import bcrypt from "bcrypt"; //hashing the pasword
import jwt from "jsonwebtoken"; //for keepimg the user logged in for a ceraing period of time


import userData from "../models/user.js";

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await userData.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: "User dont exist" });
        else {
            const isPasswordCorrect = await bcrypt.compare(
                password,
                existingUser.password
            );
            if (!isPasswordCorrect)
                return res.status(404).json({ message: "Invalid password" });
            const token = jwt.sign(
                { email: existingUser.email, id: existingUser._id },
                "test",
                { expiresIn: "1h" }
            );

           res.status(200).json({ result: existingUser, token });
            // res.send("Signed In");

        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
export const signup = async (req, res) => {
    
    const {email,password,confirmPassword,firstName,lastName}=req.body;

    try {
        const existingUser= await userData.findOne({email});

        if(existingUser) 
           return res.status(404).json({ message: "User already exist" });
       if(password!=confirmPassword)
          return res.status(404).json({ message: "Wrong password" });
          
             const hashedPassword=  await bcrypt.hash(password,12);

        
          const result= await userData.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});

        
          const token = jwt.sign(
            { email: result.email, id: result._id },
            "test",
            { expiresIn: "1h" }
        );

        // console.log(token);
        res.status(200).json({ result, token });


    } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    }
    res.send("Signed Up");
};
