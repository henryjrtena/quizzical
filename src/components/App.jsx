import React, { useState } from 'react'

import Questions from './Questions'

function App() {
  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState([])

  /**
   * Function letStart make sure users agree first before requesting to the opentdb api.
   * Reference: https://opentdb.com/api_config.php
   */
  async function letStart() {
    
    const res = await fetch("https://opentdb.com/api.php?amount=5&category=32&type=multiple&encode=base64")
    const data = await res.json()
    setQuestions(data.results)
    setStart(prevState => !prevState)
  
  }

  return (

      <div className="App">
        {
          !start
          ? <div className="welcome">
              <h1>Welcome to Quizzical!</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button onClick={() => letStart()}>Start Quiz</button>
            </div>
          : <Questions questions={questions} setQuestions={setQuestions}/>
        }
      </div>
      
  )
}

export default App
