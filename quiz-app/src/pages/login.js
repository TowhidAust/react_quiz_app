import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [adminPage, loginButtonClick] = useState({
        userEmail: 'towhidaustcse33@gmail.com',
        userPassword: '123456',
        userType: 'Admin'
    });

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    });

    const loginButtonClickHandler = () =>{
        console.log(adminPage);
    }

    const userButtonClickHandler = () =>{

    }

    return (
        <div className="login-container">
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <div>
                    <div className="row">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Your email"/>
                    </div> 
                    <div className="row">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Your Password"/>
                    </div>
                    <div id="button" className="row">
                        <Link to="/admin?id=ID123" className="link">                            
                            <button onClick = {()=>{loginButtonClickHandler()}}>Login as Admin</button>
                        </Link>
                        <Link to="/admin?id=ID123" className="link">                            
                            <button onClick = {()=>{userButtonClickHandler()}}>Login as User</button>
                        </Link>
                    </div>
                </div>
                <div id="alternativeLogin">
                    <label>Or sign in with:</label>
                    <div id="iconGroup">
                        <a href="#" id="facebookIcon"></a>
                        <a href="#" id="twitterIcon"></a>
                        <a href="#" id="googleIcon"></a>

                    </div>
                </div>
            </div>
        </div>
    )

    
}


