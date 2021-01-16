import thunk from 'redux-thunk';
import logger from './_logger';
import { applyMiddleware } from 'redux';

export default applyMiddleware(thunk, logger);
