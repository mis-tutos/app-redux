import Axios from 'axios';
import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR, LOG_OUT

} from '../constants/constants'
import { setToken } from "../setToken";

export const loadUser = () => async dispatch => {
    if (setToken(localStorage.getItem('token'))) {
        setToken(localStorage.getItem('token'))
    }
    try {
        const response = await Axios.get('http://localhost:5000/')

        dispatch({
            type: LOAD_USER,
            payload: response.data
        })
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: error })
    }
}

export const registerUser = (email, password) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({email, password})

        const response = await Axios.get('http://localhost:5000/',body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser())

    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error })
    }
}

export const loginUser = (email, password) => async dispatch =>{
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({email, password})

        const response = await Axios.get('http://localhost:5000/',body, config) //falta configurar los axios

        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })

        dispatch(loadUser())

    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error })
    }
}

export const logOut = () => async dispatch =>{
    dispatch({
        type: LOG_OUT
    })
}