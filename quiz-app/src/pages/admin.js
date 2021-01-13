import React from 'react'

export default function Admin() {
    return (
        <div className="admin-container">

            <div className="admin-inner">
                <h1 className="admin-heading">Admin Panel</h1>
                <p className="sub-title">Here you can create your question and answers. First type your question and answer and click submit. You can click multiple questions.</p>
                <div className="ques-and-ans">
                    <input type="text" placeholder="Enter your question"/>
                    <input type="text" placeholder="Enter your answer"/>
                    <button className="submit-button">Submit</button>
                </div>

                <div className="all-ques-container">
                    <h3 className="all-ques-heading">All Questions:</h3>
                </div>
            </div>
        </div>
    )
}
