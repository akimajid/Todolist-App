require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const { sequelize } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/api", routes);

// Database connection
sequelize.sync().then(() => {
  console.log("Database connected");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
