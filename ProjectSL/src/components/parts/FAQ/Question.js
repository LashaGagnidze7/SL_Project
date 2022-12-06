import React, {useState} from 'react'
import "./Question.css"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";

const Question = ({title,answer}) => {
    const [showAnswer,setShowAnswer]=useState(false);
    const handleClick = () => {
        setShowAnswer(!showAnswer);
    }
  return (
    <div className='container question'>
        <div className='question-title'>
            <div className='titleicon'>
               
            <h4 className='text-primary' style={{fontSize:"1rem"}}>  {title }</h4>
            </div>
            <button className='question-icon' onClick={handleClick}>
                {
                    showAnswer ? <AiOutlineMinus color='red' /> 
                     :
                      <AiOutlinePlus color='#1f93ff' />
                }
            </button>
        </div>
        <div className='question-answer'>
            {showAnswer && <p className='text-light'  style={{fontSize:"0.8rem", maxWidth:"700px"}}>
                {answer}
            </p>}
            
        </div>
        
    </div>
  )
}

export default Question