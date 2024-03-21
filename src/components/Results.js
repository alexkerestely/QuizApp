import React, {useContext} from 'react';
import {QuizContext} from '../Contexts';
//import {Link} from 'react-router-dom';

const Results = () => {
    const {score} = useContext(QuizContext);
    return (
        <div>
            <h1 className="congrats">Felicitari!</h1>
            <p className="fstats">Ai terminat testul.</p>
            <p className="fstats">Scor final: {score}/7</p>
        </div>
    )
}

export default Results
