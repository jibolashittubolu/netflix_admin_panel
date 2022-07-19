import axios from 'axios'
import {loginDefault, loginFaliure, loginStart, loginSuccess, logout} from './AuthActions'

//we pass the dispatch from the useContext, and the user credentials also from the calling component

export const loginApiCall = async (user, dispatch) => {
    //the provided login details would be passed down from the login component === user
    dispatch(loginStart());
    try {
        const res = await axios.post('auth/login/admin', user)
        dispatch(loginSuccess(res.data));
        //below is to ensure only admin uses this platform
        //alternatively we could use the normal login api and add the below
        // res.data.isAdmin && dispatch(loginSuccess(res.data));
        //this will fill the reducer payload with res.data
        //hence the user state which has been assigned to the payload would be the response/meat
        //we user state in this case is the user and their corresponding model propertes
    } 
    catch (error) {
        dispatch(loginFaliure())    
    }
    finally{
        dispatch(loginDefault())
        //this returns whatever current state but modifies isFetching to false
    }
};

//not really an API call
export const logoutApiCall = (dispatch) => {
    dispatch(logout());
}