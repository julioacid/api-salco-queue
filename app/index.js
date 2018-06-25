import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { port } from 'app/config';
import routes from 'app/routes';
import errorHandler from 'app/middleware/error_handler.js';

const app = express();

app.use(helmet());
app.use(bodyParser.json());

routes(app);
errorHandler(app);

const start = () => {
  app.listen(port, () => {
    console.log(`start listening on port: ${port}`);
  });
};

export { app, start };
