import React from 'react';
import { useHistory } from "react-router-dom";



export default function User() {

    const history = useHistory();

    const logout = (e) => {
        history.push('/');
    }

    return (
        <div className="admin-container">

            <div className="admin-inner">
                <p onClick={(e)=>{logout(e)}} className="login-screen-redirect">Logout</p>
                <h1 className="admin-heading">Admin Panel</h1>
                <p className="sub-title">Here you can create your question and answers. First type your question and answer and click submit. You can click multiple questions.</p>
                <div className="all-ques-container">
                    <h3 className="all-ques-heading">All Questions:</h3>
                    <div className="ques-and-ans">
                        <h3>Question1: What is the capital of Bangladesh?</h3>
                        <p>Correct Answer: Dhaka</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
