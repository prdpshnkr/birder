import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/users'
// import postsReducer from '../reducers/posts'


const configureStore = () => {
  const store = createStore(combineReducers({
    user: usersReducer
    // posts: postsReducer
  }))
  return store
}

export default configureStore