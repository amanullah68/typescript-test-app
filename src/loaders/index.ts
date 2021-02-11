import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
// import jobsLoader from './jobs';
import Logger from './logger';
import express from 'express';
// import Test from '../models/test';
//We have to import at least all the events once so they can be triggered
// import './events';

export default async ({ expressApp }: { expressApp: express.Application }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('✌️ DB loaded and connected!');

  const testModel = {
    name: 'testModel',
    // Notice the require syntax and the '.default'
    model: require('../models/test').default,
  };

  // const test = new Test({
  //   name: "Aman Ullah",
  // });
  // test.save();
  // console.log('saved', test);

  // It returns the agenda instance because it's needed in the subsequent loaders
  const { agenda } = await dependencyInjectorLoader({
    mongoConnection,
    models: [
      testModel
    ],
  });
  Logger.info('✌️ Dependency Injector loaded');

  // await jobsLoader({ agenda });
  // Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
