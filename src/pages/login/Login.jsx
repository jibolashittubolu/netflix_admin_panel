import React, { useContext, useState } from 'react'
import { loginApiCall } from '../../context/authContext/authApiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.scss'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {isFetching, dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {email, password}
        loginApiCall(user, dispatch )
    }

  return (
    <div className='login'>
        <form className='loginForm'>
            <input type='text' placeholder='email' className='loginInput' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='enter your password' className='loginInput' onChange={(e) => setPassword(e.target.value) }/>
            <button className='loginButton' onClick={handleLogin} disabled={isFetching}>Login</button>
        </form>
    </div>
  )
}

export default Login