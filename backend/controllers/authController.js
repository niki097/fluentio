const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const response = { status: false, message: 'Something went wrong' };
    const { name, email, mobile, password, confirmPassword } = req.body;

    if (!name || !email || !mobile || !password || !confirmPassword) {
        response.message = 'All fields are required';
        return res.status(400).json(response);
    }

    if (name.length > 30) {
        response.message = 'Name must be less than 30 characters';
        return res.status(400).json(response);
    }

    if (password !== confirmPassword) {
        response.message = 'Passwords do not match';
        return res.status(400).json(response);
    }

    try {
        const isUserExists = await User.findOne({ $or: [{ email }, { mobile }] });

        if (isUserExists) {
            response.message = isUserExists.email === email ? 'Email already exists' : 'Mobile number already exists';
            return res.status(400).json(response);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);

        await newUser.save();
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            mobile: newUser.mobile
        };

        response.status = true;
        response.message = 'User registered successfully';
        response.user = userResponse;
        res.status(201).json(response);
    } catch (error) {
        response.message = 'Error registering user';
        response.error = error.message;
        res.status(500).json(response);
    }
};

exports.login = async (req, res) => {
    const response = { status: false, message: 'Something went wrong' };
    const { email, password } = req.body;

    if (!email || !password) {
        response.message = 'Email and password are required';
        return res.status(400).json(response);
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            response.message = 'User not found';
            return res.status(404).json(response);
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            response.message = 'Invalid credentials';
            return res.status(401).json(response);
        }

        const payload = {
            userId: user._id,
            email: user.email,
            name: user.name,
            mobile: user.mobile
        };

        const token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: '1h' });

        const userResponse = {
            _id: user._id,
            email: user.email,
            name: user.name,
            mobile: user.mobile
        };

        response.status = true;
        response.message = 'Login successful';
        response.token = token;
        response.user = userResponse;

        return res.status(200).json(response);
    } catch (error) {
        response.message = 'Error logging in';
        response.error = error.message;
        res.status(500).json(response);
    }
};
exports.logout = async (req, res) => {
    const response = { status: false, message: "Something went wrong" };

    try {
        // Invalidate the token logic (if needed)
        response.status = true;
        response.message = "Logout successful";
        return res.status(200).json(response);
    } catch (error) {
        response.message = "Error logging out";
        response.error = error.message;
        return res.status(500).json(response);
    }
};
