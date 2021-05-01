import React from 'react'
import './Key.css'

const Key = ({chars, onClick}) => {
    return (
        <button className='key'>{chars}</button>
    )
}

export default Key
