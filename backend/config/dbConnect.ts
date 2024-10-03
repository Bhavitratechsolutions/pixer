// import mongoose from "mongoose";
// const dotenv = require("dotenv");


// dotenv.config();

// const dbConnect = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }

//   let DB_URI: string = "";

//   if (process.env.NODE_ENV === "development")
//     DB_URI = process.env.DB_LOCAL_URI!;
//   if (process.env.NODE_ENV === "production") DB_URI = process.env.DB_URI!;

//   await mongoose.connect(DB_URI);
// };

// export default dbConnect;


import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  // Check if we have a connection to the database or if it's currently connecting
  if (connection.isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    // Attempt to connect to the database
    const db = await mongoose.connect(process.env.MONGODB_URI || '', {});

    connection.isConnected = db.connections[0].readyState;

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);

    // Graceful exit in case of a connection error
    process.exit(1);
  }
}

export default dbConnect;

