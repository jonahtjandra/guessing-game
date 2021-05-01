import React from 'react'
import {useState} from 'react';

const WordInput = () => {
    const [question, setQuestion] = useState('')
    return (
        <div>
            <form className='form'>
            <div className='form-control'>
                <input 
                type='text' 
                placeholder='Pick a word for the other team'
                value = {question}
                onChange = {(e) => setQuestion(e.target.value)} />
            </div>
            <input className = 'btn' type='submit' value='Submit Word'/>
            </form>
        </div>
    )
}

export default WordInput
