import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import authReducer from '../reducer/authReducer'

const middleWare = [thunk]

const initialState = {}

const store = createStore(
    authReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store