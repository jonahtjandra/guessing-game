import React from 'react'
import Key from '../Keyboard/Key.js'
import './Game.css'
import AnswerBox from '../AnswerBox/AnswerBox.js'

const Game = () => {
    return (
        <>
        <div className="toolbar">
        <p className="text">Time Left: {}</p>
        <p className="text">Question Count: {}</p>
        <button className="question-btn">Ask A Question</button>
        <button className="quit-btn">Quit</button>
        </div>
        <div class="grid-container-answer">
        <AnswerBox chars = 'H'/>
        <AnswerBox chars = 'E'/>
        <AnswerBox chars = 'L'/>
        <AnswerBox chars = 'L'/>
        <AnswerBox chars = 'O'/>
        <AnswerBox chars = '!'/>
        </div>
        <div class="grid-container">
        <div class="grid-item"><Key chars='a'/></div>
        <div class="grid-item"><Key chars='b'/></div>
        <div class="grid-item"><Key chars='c'/></div>
        <div class="grid-item"><Key chars='d'/></div>
        <div class="grid-item"><Key chars='e'/></div>
        <div class="grid-item"><Key chars='f'/></div>
        <div class="grid-item"><Key chars='g'/></div>
        <div class="grid-item"><Key chars='h'/></div>
        <div class="grid-item"><Key chars='i'/></div>
        <div class="grid-item"><Key chars='j'/></div>
        <div class="grid-item"><Key chars='k'/></div>
        <div class="grid-item"><Key chars='l'/></div>
        <div class="grid-item"><Key chars='m'/></div>
        <div class="grid-item"><Key chars='n'/></div>
        <div class="grid-item"><Key chars='o'/></div>
        <div class="grid-item"><Key chars='p'/></div>
        <div class="grid-item"><Key chars='q'/></div>
        <div class="grid-item"><Key chars='r'/></div>
        <div class="grid-item"><Key chars='s'/></div>
        <div class="grid-item"><Key chars='t'/></div>
        <div class="grid-item"><Key chars='u'/></div>
        <div class="grid-item"><Key chars='v'/></div>
        <div class="grid-item"><Key chars='w'/></div>
        <div class="grid-item"><Key chars='x'/></div>
        <div class="grid-item"><Key chars='y'/></div>
        <div class="grid-item"><Key chars='z'/></div>
        </div>
        </>
    )
}

export default Game
