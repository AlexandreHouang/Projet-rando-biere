import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import randobiereMiddleware from 'src/middlewares/randobiereMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';
import submitBreweryFormMiddleware from 'src/middlewares/submitBreweryFormMiddleware';

// We combine devTools with the middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    randobiereMiddleware,
    authMiddleware,
    submitBreweryFormMiddleware,
    // ... other middlewares
  ),
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  // devToolsEnhancer(),
  enhancers,
);

export default store;
