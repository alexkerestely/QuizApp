import {React, useState} from 'react';
import Home from './components/Home.js';
import Play from './components/Play.js';
import Results from './components/Results.js';
import About from './components/About.js';
import Instructions from './components/Instructions.js';
import {BrowserRouter, Route} from 'react-router-dom';
import {QuizContext} from './Contexts.js';

function App() {

  const [score, setscore] = useState(0);

  return (
    <div className="App">
      
      <BrowserRouter>
         <QuizContext.Provider value={{score,setscore}}>
          <Route path='/' exact component={Home}/>
          <Route path='/instructions' exact component={Instructions}/>
          <Route path='/play' exact component={Play}/>
          <Route path='/results' component={Results} />
          <Route path='/about' component={About} />
          </QuizContext.Provider>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
