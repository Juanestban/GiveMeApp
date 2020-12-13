import { TypesAuthUser } from "./Types"

export const stateInitialAuth = {
    isLoading: true,
    isSignOut: false,
    token: null
}

const AuthReducer = (state, { type, token }) => {
    switch (type) {
        case TypesAuthUser.retoreAurh:
            return {
                ...state,
                token,
                isLoading: false
            }
        case TypesAuthUser.signIn:
            return {
                ...state,
                isSignOut: false,
                token
            }
        case TypesAuthUser.signOut:
            return {
                ...state,
                isSignOut: true,
                token: null
            }
        default:
            return null
    }
}

export default AuthReducer