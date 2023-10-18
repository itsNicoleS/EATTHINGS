const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const expiration = '2h';

// const generateToken = (user) => {
//   const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
//   return token;
// };

// const verifyToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, 'your_secret_key');
//     return decoded.userId;
//   } catch (error) {
//     throw new Error('Invalid token');
//   }
// };
module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// const generateToken = (user) => {
//   const token = jwt.sign({ userId: user._id }, secret, { expiresIn: expiration });
//   return token;
// };

// const verifyToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, secret);
//     return decoded.userId;
//   } catch (error) {
//     throw new Error('Invalid token');
//   }
// };

// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);
//   return hashedPassword;
// };

// const comparePasswords = async (password, hashedPassword) => {
//   const isValid = await bcrypt.compare(password, hashedPassword);
//   if (!isValid) {
//     throw new Error('Invalid password')
//   }
// };

// module.exports = { generateToken, verifyToken, hashPassword, comparePasswords };
