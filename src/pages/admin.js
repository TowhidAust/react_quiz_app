import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


export default function Admin() {
    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [localQues, setLocalQues] = useState('');
    const [oneQuestion, setOneQuestion ] = useState('');
    const [oneAnswer, setOneAnswer ] = useState('');

    useEffect(() => {
        localStorage.setItem('questionsData', JSON.stringify(questions));
    }, [questions]);


    

    const logout = (e) => {
        history.push('/');
    }

    // render all questions and answer
    const quesItems = questions.map((items, index) => (
        <div className="ques-and-ans" key={index}>
            <p>Q{index+1}: {items.question}</p>
            <p>Correct Answer: {items.answer}</p> 
        </div>
    ));

    const onchangeInputHandler = async (e,type) => {
        if(type === 'question'){
            setOneQuestion(e.target.value);
        }else if(type === 'answer'){
            setOneAnswer(e.target.value);
        }
    }

    const submitButtonClickHandler = (e) => {
        console.log("oneQuestion", oneQuestion);
        console.log("oneAnswer", oneAnswer);

        let newQuestionData = {
            question: oneQuestion,
            answer: oneAnswer
        } 


        if(oneQuestion === '' || oneAnswer === ''){
            alert("Empty fields not allowed. Please fillup All of the input fields");
        }else{
            setQuestions([...questions, newQuestionData]);
        }

    }



    return (
        <div className="admin-container">
            <div className="admin-inner">
                <p className="login-screen-redirect" onClick={(e)=>{logout(e)}}>Logout</p>
                <h1 className="admin-heading">Admin Panel</h1>
                <p className="sub-title">Here you can create your question and answers. First type your question and answer and click submit. You can create multiple questions. After you finished making all questions don't reload the page as we are using local browser storage. simply logout and go to user account to see the updates.</p>
                <div className="ques-and-ans-inputs">
                    <input onChange = {(e)=>{onchangeInputHandler(e, 'question')}} type="text" placeholder="Enter your question"/>
                    <input onChange = {(e)=>{onchangeInputHandler(e, 'answer')}} type="text" placeholder="Enter your answer"/>
                    <button onClick = {(e)=>{submitButtonClickHandler(e)}} className="submit-button">Submit</button>
                </div>

                <div className="all-ques-container">
                    <h3 className="all-ques-heading">All Questions:</h3>
                    {quesItems}
                </div>
            </div>
        </div>
    )
}
