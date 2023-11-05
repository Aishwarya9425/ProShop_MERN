import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

//1st jwt sign with user id and secret , then verify ie decode it with verify

// User must be authenticated
//to access protected routes - only with signed users - add this middleware - before verify jwt
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;
  console.error('token', token);

  if (token) {
    try {
      //if token exists - verify it
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.error('decoded', decoded);
      // get user details without password
      req.user = await User.findById(decoded.userId).select('-password');
      console.error('req.user ', req.user);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

// User must be an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as an admin');
  }
};

export { protect, admin };
