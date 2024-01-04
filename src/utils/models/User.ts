import { Document, Schema, model, models } from 'mongoose';

export type UserDocument = {
  username: string;
  email: string;
  password: string;
  img?: string;
  isAdmin: boolean;
} & Document;

const userSchema = new Schema<UserDocument>(
  {
    username: {
      type: String,
      required: [true, 'username is required'],
      unique: true,
      minLength: [3, 'Username should be at least 3 characters long.'],
      maxLength: [20, 'Username cannot be greater than 20 characters.'],
    },
    email: {
      type: String,
      required: [true, 'email is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      minLength: [4, 'Password should be at least 4 characters long.'],
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default models.User || model<UserDocument>('User', userSchema);
