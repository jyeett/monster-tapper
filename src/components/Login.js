import { NavLink, Link } from "react-router-dom"

function Login() {
    return (
        <div className='login'>
            <div className='login-back'>
                <form className='login-form'>
                    <input type='text' placeholder='Email'></input>
                    <input type='text' placeholder='Password'></input>
                    <Link className='login-btn' to="/fight">
                        <button className='login-btn' type='submit'>Login</button>
                    </Link>
                </form>
                <NavLink className='signup-link' exact to='/signup'>Don't have an account? Sign Up</NavLink>
            </div>
        </div>
    )
}

export default Login