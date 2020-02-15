import * as actions from './action'

export const login = (loginDetails) => {
    return {
        type:actions.LOGIN_USER,
        loginDetails:loginDetails
    }
}