import React, {useState, useContext} from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import alphaIcon from '@iconify-icons/mdi/alpha';
import Questions from '../questions';
import {Link} from 'react-router-dom';
import Results from './Results.js';
import {QuizContext} from '../Contexts.js';

const Play = () => {
   
    const {score, setscore} = useContext(QuizContext);
    const [currQuestion, setcurrQuestion] = useState(0);
    const [optChosen, setoptChosen] = useState('');
    

    const nextQuestion = () => {
     
        if(optChosen == Questions[currQuestion].answer)
        setscore(score+1);
        setcurrQuestion(currQuestion+1);
           
    }

    const finishQuiz = () => {
        if(optChosen == Questions[currQuestion].answer)
        setscore(score+1);

    }   
    
    return (
        <div>
            
            <div>
            <h1 className='prompt'>{Questions[currQuestion].prompt}</h1>
            <div>
            <p className='score' style={{textAlign: 'center'}}>Scor: {score}</p>
            </div>
            <div className='option-container-one'>
                <button className='option' onClick={()=> setoptChosen('A')}>{Questions[currQuestion].optionA}</button>
                <button className='option' onClick={()=> setoptChosen('B')}>{Questions[currQuestion].optionB}</button>
            </div>
            <div className='option-container-two'>
                <button className='option' onClick={()=> setoptChosen('C')}>{Questions[currQuestion].optionC}</button>
                <button className='option' onClick={()=> setoptChosen('D')}>{Questions[currQuestion].optionD}</button>
            </div>
            </div>
            <div className='fbutton_container'>
            {currQuestion == Questions.length-1 ?
            (<Link to='/results' onClick={finishQuiz} className='next_button' >Final Test</Link>) :
            (<button onClick={nextQuestion} className='next_button'>Urmatoarea Intrebare</button>)
            }
            </div>
        </div>
    )
}

export default Play
