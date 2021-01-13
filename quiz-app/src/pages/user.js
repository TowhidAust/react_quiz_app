import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";



export default function User() {

    const history = useHistory();
    const [questions, setQuestions] = useState([]);
    const [studentSubmission, setStudentSubmission] = useState([]);

    const [oneSingleAnswer, setOneSingleAnswer] = useState('');
    const [oneSingleQuestion, setOneSingleQuestion] = useState('');
    const [oneSingleCorrectAnswer, setOneSingleCorrectAnswer] = useState('');
    const [id, setOneSingleID] = useState('');

    useEffect(() => {
        console.log('compent did mount triggers');
        // question data from local storage
        let questionsData = JSON.parse(localStorage.getItem('questionsData'));
        setQuestions(questionsData);
    },[])

   

    useEffect(() => {

       if(oneSingleAnswer){
        setStudentSubmission([...studentSubmission, {
            id: id,
            question: oneSingleQuestion,
            answer: oneSingleCorrectAnswer,
            studentAnswer: oneSingleAnswer
        }]);
       }
        
        
        console.log(oneSingleAnswer);
    },[oneSingleAnswer,oneSingleQuestion,oneSingleCorrectAnswer]);



    const logout = (e) => {
        history.push('/');
    }

     // render all questions and answer
     const renderData = questions.map((items, index) => (
        <div className="ques-and-ans-inputs" key={index}>
            <p>Q{index+1}: {items.question}</p>
            <input onChange = {(e)=>{studentAnsInputChangeHandler(e)}} type="text" placeholder="Enter your answer" data-question = {items.question} data-answer = {items.answer} data-id = {index}/>
        </div>
    ));

    const studentAnsInputChangeHandler = (e) => {
        let question = e.target.getAttribute("data-question");
        let correctAnswer = e.target.getAttribute("data-answer");
        let studentAnswer = e.target.value;
        let id = e.target.getAttribute("data-id");


        setOneSingleAnswer(studentAnswer);
        setOneSingleQuestion(question);
        setOneSingleCorrectAnswer(correctAnswer);
        setOneSingleID(id);
    }

    const submitButtonClickHandler = (e) => {
        // setOneSingleAnswer()
        console.log('state is', studentSubmission);

        var newArray = [];
        studentSubmission.forEach(item => {
           var newItem = {
               id: item.id, 
               question: item.question,
               answer: item.answer,
               studentAnswer: []
            };
            studentSubmission.forEach(innerItem => {
              if(innerItem.id == item.id){
                  newItem.studentAnswer = newItem.studentAnswer.concat(innerItem.studentAnswer);
              }
           });
          newArray.push(newItem);
        });

        console.log('finally', newArray);





        var obj = {};
        for ( let i in newArray ){
            obj[newArray[i]['id']] = newArray[i];
        }

        newArray = new Array();
        for ( var key in obj ){
            newArray.push(obj[key]);
        }

        console.log('obj',obj);

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
