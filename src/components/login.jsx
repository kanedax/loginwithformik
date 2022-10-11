import React from 'react';

const Login = () => {
    return (
        <div className='main'>
            <div className='main-container'>
                <div className='login-part'>
                    <div className='login-title'>
                        <span>ورود اعضا</span>
                    </div>
                    <div className='username-input'>
                        <input placeholder='نام کاربری'></input>
                    </div>
                    <div className='password-input'>
                        <input placeholder='کلمه عبور'></input>
                    </div>
                    <div className='submitbutton'>
                        <button>ورود</button>
                    </div>
                </div>
                <div className='image-part'></div>
            </div>
        </div>
    );
}

export default Login;
