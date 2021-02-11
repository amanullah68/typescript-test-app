import { test } from '../interfaces/IUser';
import mongoose from 'mongoose';

const Test = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter a full name'],
        index: true,
    },
},
    { timestamps: true }
);

export default mongoose.model<test & mongoose.Document>('Test', Test);
