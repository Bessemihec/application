const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function authMiddleware(req, res, next) {
  // Get the token from the request header or query parameter
  const token = req.headers.authorization?.split(' ')[1] || req.query.token;

  // If there is no token, return an error
  if (!token) {
    return res.status(401).json({ message: 'Authentication failed: no token provided.' });
  }

  try {
    // Verify the token using the JWT secret
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Add the user object to the request
    next(); // Call the next middleware or route handler
  } catch (err) {
    // If the token is invalid or expired, return an error
    return res.status(401).json({ message: 'Authentication failed: invalid or expired token.' });
  }
}
module.exports = authMiddleware;