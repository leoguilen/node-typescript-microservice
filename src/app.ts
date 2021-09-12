import express from 'express';
import compression from 'compression';
import bodyParser from "body-parser";

import { api } from './config';
import routes from './api/routes';

const app = express();

app.use(compression());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));

app.use(api.prefix, routes);

export default app;
