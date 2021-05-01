import React from 'react'
import './AnswerBox.css'

const AnswerBox = ({chars}) => {
    return (
        <div className='box'>
            <label className='letter'>{chars}</label>
        </div>
    )
}

export default AnswerBox
