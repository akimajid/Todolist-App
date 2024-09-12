const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const register = async (userData) => {
  if (!userData.name || !userData.password) {
    throw new Error("Name and password are required");
  }

  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    console.log("Hashed password:", hashedPassword);

    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
    });

    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.log("Error creating user:", error.message);
    throw new Error(error.message);
  }
};

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return { token };
};

module.exports = {
  register,
  login,
};
