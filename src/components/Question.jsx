import React, { useEffect, useState } from 'react'
import { Option } from './Options';
import {nanoid} from 'nanoid'
export const Question = ({question}) => {
    const [optionItems, setOptionItems] = useState(question.options)

    // setVotes(votes => votes.map((vote, i) => i === selected ? vote + 1 : vote);



    const setAnswer = (name) => {
        setOptionItems(prev => {
            if(prev){
                return prev?.map(opt => {
                    if(name === opt.option.name){
                        opt.option.isHeld = true
                    }else{
                        opt.option.isHeld = false
                    }
                    return opt;
                })
            }
            else{
                console.log('Error can`t find option.')
                console.log(prev)
            }
        })
    }

        // const newOptions = [...optionItems];
        // const updatedOption = newOptions.map(opt=>{
        //     if(name === opt.option.name){
        //         opt.isHeld = !opt.isHeld;
        //     }else{
        //         opt.isHeld = false;
        //     }
        //     return opt;
        // })
        // setOptionItems(updatedOption)
        
    return (
         <div key={nanoid()} className='question'>
                 <p>{atob(question.question)}</p>
                 <div className='options' key={nanoid()}>
                    {   
                        question.options.map(option=>{
                            return <Option onClick={()=>{setAnswer(option.option.name)}} name={option.option.name} isHeld={option.option.isHeld} key={nanoid()} />
                        })
                    }
                 </div>
         </div>
      )
 }

 // line 28: return  