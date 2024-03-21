import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Instructions = () => {
    return (
        <Fragment>
        <div className='instructions-container'>
            <h1>Cum Sa Joci Jocul</h1>
            <p id='i'>Asigura-te ca citesti acest ghid inainte sa joci.</p>
            <ul className='list'>
                <li>Jocul cuprinde intrebari din domeniul informaticii, stiintei si biologiei.</li>
                <li>Fiecare joc contine 7 intrebari.</li>
                <li>Fiecare intrebare are 4 optiuni.</li>
                <li>Un singur raspuns este corect.</li> 
                <li>Scorul se actualizeaza odata cu trecerea la urmatoarea intrebare.</li>
            </ul>
            <div className="lr-buttons">
                <span><Link to='/' className='left'>Inapoi</Link></span>
                <span><Link to='/play' className='right'>Incepe</Link></span>
            </div>
        </div>
        </Fragment>
    )
}

export default Instructions
