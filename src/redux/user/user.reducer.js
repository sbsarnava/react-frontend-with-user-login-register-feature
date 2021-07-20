import { userActionTypes } from "./user.types"

const initial_state = {
    user: null
}

const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case userActionTypes.USER_LOGIN:
            const { token, emailorphone, name } = action.payload

            if (token != null && emailorphone != null && name != null) {
                return {
                    ...state,
                    user: {
                        token,
                        emailorphone,
                        name
                    }
                }
            } else {
                return {
                    ...state,
                    user: null
                }
            }

        case userActionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default userReducer