import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./middleware/logger";
import rootReducer, { initialState } from "./reducers";

export default function configureStore(preloadedState: any = initialState) {
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers as any
  );

  return store;
}
