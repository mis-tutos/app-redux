import {
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR

} from '../constants/constants'


const initialState = {
    token: localStorage.getItem('token'),
    isAllowedToLogIn: false,
    errors: {}
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload)
        default:
            return state
    }
}

export default authReducer