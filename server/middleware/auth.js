import 'dotenv/config';
import jwt from 'jsonwebtoken'


const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  
  if(!token) {
    return res.json({success: false, message:"Not Authorized, Login Again"})
  }
  
  try {
    const token_decode = jwt.verify(token, process.env.JWT_KEY);
    req.body.userId = token_decode.id;
    next();
  } catch (err) {
    console.error(err);
    res.json({success: false, message:"Error in authenticating"})
  }
}
 
export default authMiddleware;
