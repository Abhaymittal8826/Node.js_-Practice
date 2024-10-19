const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/mydatabase'; // Make sure MongoDB is running on this port

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});


// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Example of creating a new user
const createUser = async () => {
  const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
  await newUser.save();
  console.log('User created:', newUser);
};

// Call the function to create a user
createUser();
