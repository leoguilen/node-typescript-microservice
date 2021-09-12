import errorHandler from "errorhandler";

import Logger from "./infrastructure/logger";
import { environment, port } from './config';
import app from "./app";

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

const server = app.listen(port, () => {
  Logger.info(`App is running at http://localhost:${port} in ${environment} mode`);
}).on('error', err => {
  Logger.error(err);
  process.exit(1);
});

export default server;
