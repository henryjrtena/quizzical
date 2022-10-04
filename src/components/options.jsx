import React, { useState } from 'react'
import {nanoid} from 'nanoid'
export const Option = ({onClick ,isHeld, name}) => {
    return (
        <button key={nanoid()} onClick={()=>{onClick()}} className={`${isHeld}`}>{name}</button>
    ) 
}

