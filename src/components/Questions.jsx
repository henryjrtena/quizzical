import React, { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'
import shuffle from './functions'

const Questions = ({questions}) => {

    /**
     * 
     */
    let mergeQuestion = questions.map(question => {

        let options = [...question.incorrect_answers, question.correct_answer]
        let obj = []
        
        for (let x = 0; x < options.length; x++) {
            let temp = atob(options[x])
            if(options[x] === question.correct_answer){
                obj.push({
                    "option": {
                        // [temp]: temp,
                        name: temp,
                        correct: true,
                        isHeld: false
                    }
                })
            }
            else{
                obj.push({
                    "option": {
                        // [temp]: temp,
                        name: temp,
                        correct: false,
                        isHeld: false
                    }
                })
            }  
        }
        return {
            id: nanoid(),
            options: shuffle(obj),
            question: question.question
        }
        
    })

    useEffect( ()=> {
        
    }, [])

    const selectAnswer = (event) => {
        mergeQuestion.map(element => {
            if(element.id == event.target.name){
                for(let i = 0; i < element.options.length; i++){
                    if(element.options[i].option.name === event.target.value){
                        element.options[i].option.isHeld = true;
                        console.log('Tumpak')
                    }
                    else{
                        element.options[i].option.isHeld = false;
                        console.log('Ligwak')
                    }
                }
            }
        })
    }

    const generateQuiz = (array, parentId) => {
        const generate = array.map(quest => {
            let c = 'wrong'
            if(quest.option.correct === true){
                c = 'correct'
            }
            return <button key={nanoid()} name={parentId} value={quest.option.name} onClick={selectAnswer} className={`${quest.option.isHeld} ${c}`}>{quest.option.name}</button>
        })
        return generate
    }

    const quizzes = mergeQuestion.map(question => {
        return (
            <div key={nanoid()} className='question'>
                <p>{atob(question.question)}</p>
                <div className='options'>
                    {generateQuiz(question.options, question.id)}
                </div>
            </div>
        )
    })
    
    return (
        <div className='questions'>
            {quizzes}
        </div>
    )
}

export default Questions