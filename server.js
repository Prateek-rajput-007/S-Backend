const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "https://s-frontend-alpha.vercel.app",
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
