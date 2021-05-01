import React from 'react'
import {useState} from 'react'
import logo from '../../assets/logo.png'
import './Landing.css'
import {useHistory} from 'react-router-dom';

const Landing = () => {
    const [name, setName] = useState('')
    const history = useHistory();
    const submitAndMovePage = (roomnumber,alias)=>{
        if(!name) {
            alert('Please Enter your Name')
        } else {
            history.push(`/wait/${roomnumber}/${alias}`);
        }
        
    }
    const joinRoom = (alias) => {
        if(!name) {
            alert('Please Enter your Name')
        } else {
            history.push(`/join/${alias}`);
        }
    }

    return (
        <>
        <img className = "logo" src = {logo}></img>
        <form className='landing-container'>
            <div className='form-control'>
                <input 
                type='text' 
                placeholder='Enter your alias...'
                value = {name}
                onChange = {(e) => setName(e.target.value)} />
            </div>
            <input onClick={()=>submitAndMovePage(1234,name) } className = 'btn' type='submit' value='Create a new game'/>
            <input onClick={()=>joinRoom(name) } className = 'btn' type='submit' value='Join room'/>
        </form>
        </>
    )
}

export default Landing
