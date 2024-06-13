import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()


// middleware to validate token (rutas protegidas)
/* const verifyToken =  (req, res) => {
  const token =  req.cookies.xToken
  console.log('token verificado:', token)
  if (!token) return res.status(401).json({ error: 'Acceso denegado' })
  try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET)
      req.user = verified
      next() // continuamos
  } catch (error) {
      res.status(400).json({error: 'token no es válido'})
  }
} */

/*   function verifyToken(req, res, next) {
    console.log('Header:', req.cookies.xToken)
    const token = req.cookies.xToken;
    console.log('token verify:', token)
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
     req.id = decoded.id;
     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
     }; */

     /* function verifyToken(req, res, next) {
        const authCookie = req.cookies['xToken'];

        console.log('prueba de cookie:', authCookie)
    
        // If there is no cookie, return an error
        if(authCookie == null) return res.sendStatus(401);
    
        // If there is a cookie, verify it
        jwt.verify(authCookie, process.env.TOKEN_SECRET, (err, user) => {
            // If there is an error, return an error
            if(err) return res.sendStatus(403);
    
            // If there is no error, continue the execution
            req.user = user;
            next();
        })
    } */

     const verifyToken = async (token) => {}
    

export default verifyToken;