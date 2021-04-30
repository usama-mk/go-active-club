import React from 'react'
import './ParticipantsRow.css'

function ParticipantsRow({participantImage, participantNumber, participantGroup}) {
    return (
        <div className="participants__row" >
                <img src={participantImage} alt=""/>
                <div className="participants__row__numbers">{participantNumber}</div>
                <div className="participants__row__groupName">{participantGroup}</div>
            </div>
    )
}

export default ParticipantsRow
