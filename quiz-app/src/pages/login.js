import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export default function Login() {
    const history = useHistory();
    const [adminPage, setAdminLogin] = useState({
        adminEmail: 'admintest@gmail.com',
        adminPassword: 'admintest',
    });

    const [userPage, setUserLogin] = useState({
        userEmail: '007towhid2016@gmail.com',
        userPassword: '123456',
    });

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log("component did mount triggers");
    });


    

    const loginButtonClickHandler = (e) =>{
        console.log(adminPage);
        if((adminPage.adminEmail === 'admin@gmail.com') && (adminPage.adminPassword === 'admin') ){
            history.push('admin');
        }else{
            alert("your email/password is not matched with admin. see if the email/password is correct");
            history.push('');
        }

    }

    const userButtonClickHandler = (e) =>{

    }


    const onchangeUserInputHander = (e, type) => {
        if(type === 'text'){
            setAdminLogin({
                adminEmail: e.target.value,
                adminPassword: adminPage.adminPassword,
            });
        }else if(type === 'password'){
            setAdminLogin({
                adminEmail: adminPage.adminEmail,
                adminPassword: e.target.value,
            });
        }

    }

    
    return (
        <div className="login-container">
            <div id="loginform">
                <h2 id="headerTitle">Login</h2>
                <div>
                    <div className="row">
                        <label>Email</label>
                        <input onChange = {(e)=>{onchangeUserInputHander(e, 'text')}} type="email" placeholder="Enter Your email"/>
                    </div> 
                    <div className="row">
                        <label>Password</label>
                        <input onChange = {(e)=>{onchangeUserInputHander(e, 'password')}} type="password" placeholder="Enter Your Password"/>
                    </div>
                    <div id="button" className="row">
                                          
                        <button onClick = {(e)=>{loginButtonClickHandler(e)}}>Login as Admin</button>
                       
                        <button onClick = {()=>{userButtonClickHandler()}}>Login as User</button>
                        
                    </div>
                </div>
                <div id="alternativeLogin">
                    {/* <label>Or sign in with:</label> */}
                    <div id="iconGroup">
                        {/* <a href="/#" id="facebookIcon"></a>
                        <a href="/#" id="twitterIcon"></a>
                        <a href="/#" id="googleIcon"></a> */}

                    </div>
                </div>
            </div>
        </div>
    )

    
}


