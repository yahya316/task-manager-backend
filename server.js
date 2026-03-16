const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

<<<<<<< HEAD
=======
// Fallback env vars
process.env.MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin:admin123@cluster0.blra75w.mongodb.net/taskmanager?retryWrites=true&w=majority";
process.env.JWT_SECRET = process.env.JWT_SECRET || "taskmanager_jwt_secret_key_2024_change_me";

console.log("MONGO_URI:", process.env.MONGO_URI);

>>>>>>> 393f578061f2f0650f14ae885060a023ecb26c81
// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/users', require('./routes/users'));
app.use('/api/activity', require('./routes/activity'));

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Task Manager API is running',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

const PORT = process.env.PORT || 5000;
<<<<<<< HEAD

=======
>>>>>>> 393f578061f2f0650f14ae885060a023ecb26c81
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
