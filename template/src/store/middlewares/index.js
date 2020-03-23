import { actionSplitter } from './my-middlewares/action-splitter';
import { logger } from './my-middlewares/logger';
import { middleware } from './my-middlewares/middleware';
import { api } from './my-middlewares/api';

const myMmiddlewares = [ actionSplitter, logger, middleware, api ];

export default myMmiddlewares;
