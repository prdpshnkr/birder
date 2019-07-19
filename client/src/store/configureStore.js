import { createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from '../reducers/users'
import LocationReducer from '../reducers/location'
import ReverseGeoReducer from '../reducers/reverseGeoReducer'

/* simplified React Promise Middleware */
function promiseMiddleware({ dispatch }) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  }

  return next => action => {
    return isPromise(action.payload)
      ? action.payload.then(
        result => dispatch({ ...action, payload: result }),
        error => dispatch({ ...action, payload: error, error: true })
      )
      : next(action);
  };
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const configureStore = () => {
  const store = createStoreWithMiddleware(combineReducers({
    user: usersReducer,
    location: LocationReducer,
    address: ReverseGeoReducer
  }))
  return store
}

export default configureStore