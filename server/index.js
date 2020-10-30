import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import mongoose from 'mongoose';
import cors from 'cors';
// midlewares
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
// Routes
import teacherRouter from './routes/teacher.js';
import courseRouter from './routes/course.js';

const HOST = 'localhost';
const PORT = 5000;
export const databaseURI = 'mongodb://localhost/web-courses';
// const databaseURI = 'mongodb://localhost:2700/mongoose-intro

// Creacion del servidor
const server = express();
server.use(cors);
mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// El servidor utilizará como deserializador de data bodyparser y deserializara en JSON
server.use(bodyParser.json());
// Utiliza un middleware que permite tener descripciones mas especificas en la consola
server.use(httpLoggerMiddleware);
// Utiliza un middleware que permite crear headers de respuesta que indiquen que el contenido es JSON
server.use(jsonResponseMiddleware);

// El router de teacher
server.use(teacherRouter);
// El router de course
server.use(courseRouter);

// Sino no hay rutas definidas envia error al cliente
server.use(errorHandlerMiddleware);

// Inicializa el servidor
server.listen(PORT, () =>
  // utilizando el logger de la libreria winston imprimo en consola que el servidor se ha iniciado
  logger.info(`server listening ${JSON.stringify({ HOST, PORT })}`),
);
