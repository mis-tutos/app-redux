import {createStore, applyMiddleware} from 'redux'
import authReducer from '../reducer/authReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleWare = [thunk]

const initialState = {}

const store = createStore(
    authReducer,
    initialState,
    composeWithDevTools()
)

export default store