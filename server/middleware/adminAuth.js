import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {
        // Accept standard Authorization header or a custom token header
        let token = req.headers.authorization || req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: 'Not Authorized, token missing' });
        }

        if (typeof token === 'string' && token.startsWith('Bearer ')) {
            token = token.slice(7).trim();
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { isAdmin } = decoded;

        // decoded should be an object containing `email` when token was created
        if (!isAdmin) {
            return res.status(403).json({ success: false, message: 'Not Authorized, invalid admin token' });
        }

        next();
    } catch (error) {
        console.log('Admin error', error);
        const message = error && error.name === 'TokenExpiredError' ? 'Token expired' : error && error.name === 'JsonWebTokenError' ? 'Invalid token' : error?.message;
        return res.status(401).json({ success: false, message });
    }
}

export default adminAuth;