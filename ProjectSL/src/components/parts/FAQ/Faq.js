import React,{useEffect} from 'react'
import {FcAbout} from "react-icons/fc"
import Question from './Question';
import {questions} from "./data.js"
import './Faq.css'
import AOS from 'aos';
import "aos/dist/aos.css";

const Faq = () => {
  return (
    <section id='faq'>
      <div  className='container faq'>
        <div className='title'>
         
         <FcAbout color="orangered" size={30}/>
          <h2>FAQ</h2>
          </div>
          <div className='questions' >
            {questions.map((question)=> (
              <Question key={question.id} title={question.title} answer={question.answer}  />
            ))}
           
         </div>
         </div>
    </section>
  )
}

export default Faq