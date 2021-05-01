import React from 'react'
import {useState} from 'react'
import logo from '../../assets/logo.png'
import './Join.css'
import {useHistory, useParams} from 'react-router-dom';

const Landing = () => {
    const {name} = useParams()
    const [roomID, setRoomID] = useState();
    const history = useHistory();
    const submitAndMovePage = (roomnumber,alias)=>{
        if(!roomID) {
            alert('Please Enter your Name')
        } else {
            history.push(`/wait/${roomnumber}/${alias}`);
        }
        
    }
    return (
        <>
        <img className = "logo" src = {logo}></img>
        <form className='landing-container'>
            <div className='form-control'>
                <input 
                type='text' 
                placeholder='Enter room code...'
                value = {roomID}
                onChange = {(e) => setRoomID(e.target.value)} />
            </div>
            <input onClick={()=>submitAndMovePage(roomID,{name})} className = 'btn' type='submit' value='Join Room'/>
        </form>
        </>
    )
}

export default Landing
