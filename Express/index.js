require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const RunServer = require('./database/connection');
const signupRouter = require('./routes/signup_routes');

const app = express();
const port = 5000;

RunServer();


app.use(express.json());
app.use(cors());

app.use('/api/user', signupRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Validate passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'User registered successfully',
      data: { id: newUser._id, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



async function loginUser(req, res) {
  try {
    const { password } = req.body;
    const userExists = {}; 

    const isMatch = await bcrypt.compare(password, userExists.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Login Successful', data: userExists });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

