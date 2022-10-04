import React, { useState, useEffect } from 'react'
import {nanoid} from 'nanoid'
import shuffle from './functions'

const Questions = ({questions}) => {
    const [fullQuestion, setFullQuestion] = useState()


    /**
     * 
     */
    // let mergeQuestion = 
    const newQuestions = questions.map(question => {
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
    useEffect( () => {
        
        setFullQuestion(newQuestions)

    }, [])
    console.log(fullQuestion)

    // const selectAnswer = (event) => {
    //     fullQuestion.map(element => {
    //         if(element.id == event.target.name){
    //             for(let i = 0; i < element.options.length; i++){
                    
    //                 if(element.options[i].option.name === event.target.value){
    //                     element.options[i].option.isHeld = true;
    //                     //console.log('Tumpak')
    //                 }
    //                 else{
    //                     element.options[i].option.isHeld = false;
    //                     //console.log('Ligwak')
    //                 }

    //             }
    //         }
    //     })

    // }

    const selectAnswer = (parentId, optionValue) => {
        const dummyQuestions = [...fullQuestion];
        dummyQuestions.map(question=>{
           if(question.id === parentId){
            question.options.map(option=>{
                if(option.option.name === optionValue && (option.option.isHeld !== true && option.option.name === optionValue)){
                    option.option.isHeld = true;
                }else if(option.option.name === optionValue && (option.option.isHeld === true && option.option.name === optionValue)){
                    option.option.isHeld = false;
                }
                else{
                    option.option.isHeld = false;
                }
            })
           }
        })
        return dummyQuestions;
    }//setFullQuestion(selectAnswer(parentId, optionValue))

    const generateQuiz = (array, parentId) => {
        const generate = array.map(quest => {
            const optionValue = quest.option.name;
            return <button key={nanoid()} onClick={()=>{setFullQuestion(selectAnswer(parentId, optionValue))}} className={`${quest.option.isHeld}`}>{quest.option.name}</button>
        })
        return generate
    }

    // let allQuestions
    // if(fullQuestion != undefined){
    //     allQuestions = fullQuestion.map(question => {
    //         return (
    //             <div key={nanoid()} className='question'>
    //                 <p>{atob(question.question)}</p>
    //                 <div className='options'>
    //                     {generateQuiz(question.options, question.id)}
    //                 </div>
    //             </div>
    //         )
    //     })
    // }
    const allQuestions = fullQuestion?.map(question=>{
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
         {allQuestions}
        </div>
    )
}

export default Questions