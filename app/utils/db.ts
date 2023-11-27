import mongoose from 'mongoose'

let isConnected: boolean = false;

const connect = async () => {
  if(!process.env.MONGO) {
    throw new Error('MONGO environment variable is not defined')
  }

  if (isConnected){
    return console.log('already connected');
  }

  try {
    await mongoose.connect(process.env.MONGO, {dbName: 'devAmat'})
    isConnected = true;
    console.log('connected');
  } catch (error) {
    throw new Error('Failed to connect to Database')
  }
}

export default connect;