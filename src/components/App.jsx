import React, { useEffect, useState } from 'react'
import Questions from './Questions'

function App() {
  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState({})
  const [receivedQuestion, setReceivedQuestion] = useState([])
  const [ready, setReady] = useState(false)

  const letStart = () => {
    setStart(prevState => !prevState)
  }

  useEffect(() => {
      async function getQuestions() {
        const res = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
        const data = await res.json()
        setQuestions(data)
        setReady(true)
      }
      
      return () => {
        getQuestions()
      }
  }, [])

  function selectOption(questionId, answer){
    console.log(questionId, answer)
  }

  function setterQuestion(obj){
    setReceivedQuestion()
  }

  return (
    !start 
      ?
      <div className="App">
        <div className="welcome">
          <h1>Welcome to Quizzical!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          {ready && <button onClick={letStart}>Start Quiz</button>}
        </div>
      </div>
      :
      <Questions selectOption={selectOption} data={questions} setReceivedQuestion={setReceivedQuestion} />
  )
}

export default App
