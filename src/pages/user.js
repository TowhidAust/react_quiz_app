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
    const [totalMark, setTotalMark] = useState('');
    const [obtainedMark, setObtainedMark] = useState('');

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
    },[oneSingleAnswer,oneSingleQuestion,oneSingleCorrectAnswer,id]);



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

        // modify the state with student onchange input field answers. so that we can know the final answer from the student asnswer array.
        var newStudentAnsArray = [];
        studentSubmission.forEach(item => {
           var newItem = {
               id: item.id, 
               question: item.question,
               answer: item.answer,
               studentAnswer: []
            };
            studentSubmission.forEach(innerItem => {
              if(innerItem.id === item.id){
                  newItem.studentAnswer = newItem.studentAnswer.concat(innerItem.studentAnswer);
              }
           });
          newStudentAnsArray.push(newItem);
        });

        console.log('finally', newStudentAnsArray);





        // now remove the duplicate objects from the array and create a new object
        var obj = {};
        for ( let i in newStudentAnsArray ){
            obj[newStudentAnsArray[i]['id']] = newStudentAnsArray[i];
        }

        newStudentAnsArray = [];
        for ( var key in obj ){
            newStudentAnsArray.push(obj[key]);
        }
        // finally set this to local storage
        localStorage.setItem('studentAnswers', JSON.stringify(obj));
        calculateObtainedMarks(obj);

    }

    const calculateObtainedMarks = (studentAnsObj) => {
        let studentAnswers = JSON.parse(localStorage.getItem('studentAnswers'));
        console.log("student answers", studentAnswers);
        let markArr = [];
        let obtainedMarkArr = [];
        for(let index in studentAnswers){
            // as we know the last index is the student ans so find the last index
            let studAnsArrLength = studentAnswers[index].studentAnswer.length - 1;
            let studentAns = studentAnswers[index].studentAnswer[studAnsArrLength];
            let correctAns = studentAnswers[index].answer;

            if(studentAns === correctAns){
                // markArr.push(1);
                obtainedMarkArr.push(1);
            }else{
                // markArr.push(0);
            }
        }


        // finding total marks
        let questionsData = JSON.parse(localStorage.getItem('questionsData'));

        for (let i in questionsData) {
            markArr.push(1);
        }


        let totalMark = markArr.length;
        let obtainedMark = obtainedMarkArr.length;

        setTotalMark(totalMark);
        setObtainedMark(obtainedMark);

        console.log('total and obtained', totalMark, obtainedMark);
        
    }



    return (
        <div className="user-container">
            <div className="user-inner">
                <p onClick={(e)=>{logout(e)}} className="login-screen-redirect">Logout</p>
                <h1 className="user-heading">user Panel</h1>
                <p className="sub-title">Here you can answer the questions. If your answer is matched with the correct answer then you will get the marks otherwise the answer will be treated as wrong answer.</p>
                <div className="all-ques-container">
                    <div className="questions-and-answer-inputs">
                        <h3 className="all-ques-heading">All Questions:</h3>
                        {renderData}
                        <button onClick = {(e)=>{submitButtonClickHandler(e)}} className="submit-button">Submit</button>
                    </div>
                    <div className="marks-container">
                        <h3>Obtained Marks</h3>

                        <p>Total Marks: {totalMark}</p>
                        <p>Obtained Marks: {obtainedMark}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
