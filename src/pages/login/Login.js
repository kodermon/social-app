import './login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-wrapper'>
            <div className='login-left'>
                <h3 className='login-logo'>React Social App</h3>
                <span className='login-desc'>Connect with friends and family with social app</span>
            </div>
            <div className='login-right'>
                <div className='login-box'>
                    <input type='email' placeholder='Email' className='login-input' />
                    <input type='password' placeholder='Password' className='login-input' />
                    <button className='login-btn'>Log In</button>
                    <span className='forgot-password'>Forgot password?</span>
                    <button className='login-register-btn'>Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login