import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import mongoose from 'mongoose';
// midlewares
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
// Routes
import teacherRouter from './routes/teacher.js';
import courseRouter from './routes/course.js';

const HOST = 'localhost';
const PORT = 4000;
export const databaseURI = 'mongodb://localhost/web-courses';

const server = express();
mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(bodyParser.json());
server.use(httpLoggerMiddleware);
server.use(jsonResponseMiddleware);
server.use(cors());

server.use(teacherRouter);
server.use(courseRouter);

server.use(errorHandlerMiddleware);

server.listen(PORT, () =>
  logger.info(`server listening ${JSON.stringify({ HOST, PORT })}`),
);
