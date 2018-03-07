/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import LoggedUserReducer from './loggedUserReducer'

/**
 * 主reducers方法，合并各个子reducer
 * @param {object} asyncReducers 
 */
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    loggedUser: LoggedUserReducer,
    routing: routerReducer,
    ...asyncReducers
  })
}

export default makeRootReducer
