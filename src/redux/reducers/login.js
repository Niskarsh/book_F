import { LOGIN_SUCCESSFUL } from '../actions'
let initialState = {}

export const loginReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case LOGIN_SUCCESSFUL : 
            return {
                ...state,
                emailId: action.emailId,
                nickname: action.nickname,
                token: action.token,
                imageUrl: action.imageUrl
            }

        default :
            return state

    }
}