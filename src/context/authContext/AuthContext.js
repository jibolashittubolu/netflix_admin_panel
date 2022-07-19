import { createContext, useReducer, useEffect, useState } from "react";
import { logoutApiCall } from "./authApiCalls";
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
    // validity_period: 0,
    // validity_exp: this.validity_period,
    // valid: 5000
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    // const [timer, setTimer] = useState(0)

    useEffect(
        () => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user])

    // const {dispatch} = useContext (AuthContext);

    // const handleLogout = () => {
    //     logoutApiCall (dispatch)
    // }

    return (
        <AuthContext.Provider
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
