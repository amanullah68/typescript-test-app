import mongoose from 'mongoose';
import {Db} from 'mongodb';
import config from '../config';

export default async (): Promise<Db> => {
    const databaseUrl:string = config.databaseURL!;
    const connection = await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    return connection.connection.db;
};
  