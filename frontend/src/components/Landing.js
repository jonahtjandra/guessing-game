import React from 'react'
import {useState} from 'react'
import logo from './logo.png';
import {useHistory} from 'react-router';

const Landing = () => {
    const [name, setName] = useState('')
    const history = useHistory();
    const submitAndMovePage = (roomnumber,alias)=>{
        history.push(`/wait/${roomnumber}/${alias}`);
    }
    return (
        <>
        <img className = "logo" src = {logo}></img>
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
