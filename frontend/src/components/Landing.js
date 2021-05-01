import React from 'react'
import {useState} from 'react'
import logo from './logo.png';

const Landing = () => {
    const [name, setName] = useState('')

    return (
        <>
        
        <form className='landing-container'>
            <div className='form-control'>
                <input 
                type='text' 
                placeholder='Enter your alias'
                value = {name}
                onChange = {(e) => setName(e.target.value)} />
            </div>
            <input className = 'btn btn-block' type='submit' value='Create a new game'/><input className = 'btn btn-block' type='submit' value='Join a room'/>
        </form>
        </>
    )
}

export default Landing
