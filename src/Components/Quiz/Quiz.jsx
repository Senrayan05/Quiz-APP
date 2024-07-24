import React, { useState } from 'react'
import './quiz.css';
import { data } from '../../data'

export default function Quiz() {

  //using usestate to obtain data
  const [index, setIndex ] = useState(0);                   // to get index value of quiz 
  const [question, setQuestion ]=useState(data[index]);     // for changing quiz question
  const [isLastPage, setIsLastPage]=useState(false) ;   // checking whether  question is last or not
  const [score, setScore]=useState(0);
  const [lock, setLock]=useState(false);

  function nextQuestion(){
    setLock(false)

    if(index < data.length-1){
      setIndex(index + 1);
      setQuestion(data[index + 1 ]);
    }
    else{
      setIsLastPage(true)
    }
  }

  function checkAnswer(e, ans){
    if(lock === false){
      if(ans === question.ans){
        setScore(score + 1);
        e.target.classList.add('correct');
      }
      else{
          e.target.classList.add('incorrect');
      }
        setLock(true);
}
}

  if (isLastPage === true){
    return(
      <>
      <h2>Congrats you have Completed the Quiz
      <br></br>
      <br></br>
      Quiz Score = {score}</h2>
      </>

    )
  }


  return (
    <div className='quiz'>

    <h1> Kod Quiz Applicaton</h1>

    <h3>{question.question}</h3>
    
    <ul>
      <li onClick={(e)=>{checkAnswer(e, '1')}}>{question.option1}</li>
      <li onClick={(e)=>{checkAnswer(e, '2')}}>{question.option2}</li>
      <li onClick={(e)=>{checkAnswer(e, '3')}}>{question.option3}</li>
      <li onClick={(e)=>{checkAnswer(e, '4')}}>{question.option4}</li>
    </ul>
    <button onClick={nextQuestion}>Next</button>

    <div>
        Question : {index + 1} of {data.length}
    </div>

    </div>
  )
}
