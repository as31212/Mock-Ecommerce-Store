import { Link, useNavigate } from 'react-router-dom';

const Login = ()=>{

    return(
        <>
        <div id="login-div">
            <h2><b>Login</b></h2>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='Password' />
            <button>Continue</button>
            <p>Have an account? <Link to="/SignUp">Click here</Link> to sign-up</p>
            <input type="checkbox" id='login-checkbox'/><label htmlFor="login-checkbox">By continuing, I agree to the terms of use policy</label>
        </div> 
        </>
    );
}

export default Login;