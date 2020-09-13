import React from 'react'
import {Provider} from 'react-redux'
import store from './store/store'
import Register from './Register'

export const App = () => {

    return (
        <Provider store={store}>
            <Register />
        </Provider>
    )
}
