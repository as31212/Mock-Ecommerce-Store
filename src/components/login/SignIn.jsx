import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div id="sign-in-div">
        <h2>
          <b>Sign In</b>
        </h2>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Password" />
        <button>Continue</button>
        <p>
          Create an account? <Link to="/Login">Login here</Link>
        </p>
        <input type="checkbox" id='sign-in-checkbox'/><label htmlFor="sign-in-checkbox">By continuing, I agree to the terms of use policy</label>
      </div>
    </>
  );
};

export default SignIn;
