import { LOGIN_SUCCESSFUL } from '../actions'

const initialState = {
    loggedIn: false
}

export const loggedInStatus = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL : 
            return {
                ...state,
                loggedIn : true
            }

        default :
            return state

    }
}