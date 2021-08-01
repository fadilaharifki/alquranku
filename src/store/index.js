import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dataAlquranReducer from './reducers/dataAlquran'
import dataDetailReducer from './reducers/detail'
import favoriteReducer from './reducers/favorite'

const reducers = combineReducers({
    dataAlquran: dataAlquranReducer,
    dataDetail: dataDetailReducer,
    dataFavorite: favoriteReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
))

export default store