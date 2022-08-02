import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const  authHeader = req.headers["authorization"];
     
    let decodedData;

    if (authHeader) {   
         const token=authHeader.split(" ")[1];   
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;