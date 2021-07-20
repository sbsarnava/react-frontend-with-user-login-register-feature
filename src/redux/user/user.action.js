import { userActionTypes } from "./user.types";
import axios from 'axios'

export const userLogin = (email, password) => async (dispatch) => {
    //In the future let there be an error case
    const { data } = await axios.post('/auth/login', { emailorphone: email, password }).catch(e => console.log(e.message))
    dispatch({
        type: userActionTypes.USER_LOGIN,
        payload: data
    })
}

export const userLogout = () => ({
    type: userActionTypes.USER_LOGOUT
})

export const userRegister = (name, email, password) => async (dispatch) => {
    const { data } = await axios.post('/auth/register', { name, emailorphone: email, password }).catch(e => console.log(e.message))
    dispatch({
        type: userActionTypes.USER_LOGIN,
        payload: data
    })
}