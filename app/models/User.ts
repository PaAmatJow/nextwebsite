import mongoose, {Document, Schema} from 'mongoose';

interface IUser extends Document {
	name: string;
	email: string;
	password: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    unque: true,
    required: true,
  },
  email: {
    type: String,
    unque: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {timestamps: true})

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);