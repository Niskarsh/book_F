import { LOGIN_SUCCESSFUL } from './actionTypes'

export const login = (emailId, nickname, token, imageUrl) => ({
    emailId,
    nickname,
    token,
    imageUrl,
    type: LOGIN_SUCCESSFUL
})