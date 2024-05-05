import { Link } from 'react-router-dom';
import Footer from "../Footer";

const Login = () => {
    return (
        <>
      <div className="min-h-screen flex items-center">
    <div id="login-div" className="max-w-xl mx-auto p-10 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <input className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:border-blue-500" type="email" placeholder='Email address' />
        <input className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 focus:outline-none focus:border-blue-500" type="text" placeholder='Password' />
        <button className="w-full bg-orange-400 hover:brightness-90 text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">Continue</button>
        <p className="mt-6 text-sm text-gray-600">Don't have an account? <Link to="/SignUp" className="text-blue-500 hover:underline">Sign up here</Link></p>
        <div className="mt-6 flex items-center">
            <input className="mr-2" type="checkbox" id='login-checkbox' />
            <label htmlFor="login-checkbox" className="text-sm text-gray-600">By continuing, I agree to the terms of use policy</label>
        </div>
    </div>
</div>
<Footer />

        </>
    );
}

export default Login;
