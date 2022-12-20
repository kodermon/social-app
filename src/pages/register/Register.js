import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <div className='register-wrapper'>
            <div className='register-left'>
                <h3 className='register-logo'>React Social App</h3>
                <span className='register-desc'>Connect with friends and family with social app</span>
            </div>
            <div className='register-right'>
                <div className='register-box'>
                    <input type='text' placeholder='Username' className='register-input' />
                    <input type='email' placeholder='Email' className='register-input' />
                    <input type='password' placeholder='Password' className='register-input' />
                    <input type='password' placeholder='Confirm Password' className='register-input' />
                    <button className='register-btn'>Sign Up</button>
                    <button className='register-login-btn'>Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register