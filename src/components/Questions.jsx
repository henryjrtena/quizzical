import React, {useState} from 'react'
import {nanoid} from 'nanoid'
import he from 'he'

const Questions = (props) => {
    function shuffle(array) {
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
    
    let questionsEl = ''
        if(props.data.response_code === 0){
            console.log(props.data.response_code)
            questionsEl = props.data.results.map(question =>{
                let questionId = nanoid()
                //let answerId = nanoid()
                
                let options = shuffle([...question.incorrect_answers, question.correct_answer])
                let optionsEl = options.map(option => <button key={nanoid()} className="option" onClick={()=>props.selectOption(questionId, option)}>{option}</button>)

                let createNewObj = []
                let obj
                for (let x = 0; x < options.length; x++) {
                    if(options[x] === question.correct_answer){
                        obj = {
                            name: options[x],
                            correct: true,
                            isHeld: false,
                        }
                    }
                    else{
                        obj = {
                            name: options[x],
                            correct: false,
                            isHeld: false,
                        }
                    }
                    createNewObj.push(obj)
                }
                let questionAnswer = {"question": question.question, "options": createNewObj}
                //props.selectOption = questionAnswer
                //props.setReceivedQuestion(questionAnswer)
                console.log(questionAnswer)
                return (
                    <div className="question" key={nanoid()}>
                        <p>{he.decode(question.question)}</p>
                        <div className='options'>
                            {optionsEl}
                        </div>
                    </div>
                )
            })
        }
        else{
            console.log("No questions received", props.data.response_code)
            questionsEl = <p>Error getting questions</p>
        }
    return (
        <div className='questions'>
            {props.data.response_code == 0 && questionsEl}
        </div>
    )
}

export default Questions