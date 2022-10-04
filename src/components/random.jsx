/*

// let questionId = nanoid()
          let options = shuffle([prevQuestions.incorrect_answers, prevQuestions.correct_answer])
          // let optionsEl = options.map(option => <button key={nanoid()} className="option" onClick={()=>props.selectOption(questionId, option)}>{option}</button>)
          
          console.log(options)
          
          for (let x = 0; x < options.length; x++) {
            if(options[x] === prevQuestions.correct_answer){
                createNewObj = {
                    name: options[x],
                    correct: true,
                    isHeld: false,
                }
            }
            else{
                createNewObj = {
                    name: options[x],
                    correct: false,
                    isHeld: false,
                }
            }
          }


    // fetch('https://opentdb.com/api.php?amount=5&category=32&type=multiple&encode=base64')
    //     .then(response => response.json())
    //     .then(data => setQuestions(data.results))
    //     .then( () => {

    //       setQuestions(prevQuestions => {
            
    //         prevQuestions.map(question => {
    //           console.log(atob(question.question))
    //         })

    //       })
    // })          


const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  !start 
      ?
      <div className="App">
        <div className="welcome">
          <h1>Welcome to Quizzical!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button onClick={letStart}>Start Quiz</button>
        </div>
      </div>
      :
      <Questions data={questions}/>















*/

const allQuestions = prevQuestion.map(question => {
    return (
        <div key={nanoid()} className='question'>
            <p>{atob(question.question)}</p>
            <div className='options'>
                {generateQuiz(question.options, question.id)}
            </div>
        </div>
    )
})

return <>{allQuestions}</>