import React, { useContext, useReducer } from 'react'
import AuthReducer, { stateInitialAuth } from '../reducers/AuthReducer'

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
    const [userAuth, dispatch] = useReducer(AuthReducer, stateInitialAuth)

    return (
        <AuthContext.Provider value={[userAuth, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}

const useUserAuth = () => useContext(AuthContext)[0]
const useDispatch = () => useContext(AuthContext)[1]

export { AuthContext, useUserAuth, useDispatch }
export default AuthProvider