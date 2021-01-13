import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";



export default function User() {

    const history = useHistory();
    const [questions, setQuestions] = useState(
        [
            {
                question: 'What is the capital of Bangladesh?',
                correctAnswer: 'Dhaka',
            },
            {
                question: 'What is 2+2?',
                correctAnswer: '4',
            },
        ]
    )

    const [oneSingleAnswer, setOneSingleAnswer] = useState('');


    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     setStudentAnswer( prevState => ([...prevState, {
    //         question: 'What is the capital of Bangladesh?',
    //         correctAnswer: 'Dhaka',
    //         givenStudentAnswer: oneSingleAnswer,
    //     }]))
    // });

    useEffect(() => {
        // setStudentAnswer([...studentAnswer, {
        //     question: 'What is the capital of Bangladesh?',
        //     correctAnswer: 'Dhaka',
        //     givenStudentAnswer: oneSingleAnswer,
        // }]);
    }, [])

   

    const logout = (e) => {
        history.push('/');
    }

     // render all questions and answer
     const renderData = questions.map((items, index) => (
        <div className="ques-and-ans-inputs" key={index}>
            <p>Q{index+1}: {items.question}</p>
            <input onChange = {(e)=>{studentAnsInputChangeHandler(e)}} type="text" placeholder="Enter your answer"/>
        </div>
    ));

    const studentAnsInputChangeHandler = (e) => {
        setOneSingleAnswer(e.target.value);

        console.log(oneSingleAnswer);
    }
    const submitButtonClickHandler = (e) => {
        // setOneSingleAnswer()
        // console.log('state is', studentAnswer);

    }



    return (
        <div className="user-container">
            <div className="user-inner">
                <p onClick={(e)=>{logout(e)}} className="login-screen-redirect">Logout</p>
                <h1 className="user-heading">user Panel</h1>
                <p className="sub-title">Here you can answer the questions. If your answer is matched with the correct answer then you will get the marks otherwise the answer will be treated as wrong answer.</p>
                <div className="all-ques-container">
                    <h3 className="all-ques-heading">All Questions:</h3>
                    {renderData}
                    <button onClick = {(e)=>{submitButtonClickHandler(e)}} className="submit-button">Submit</button>
                </div>
            </div>
        </div>
    )
}
