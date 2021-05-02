import React from 'react'
import { useHistory } from 'react-router'
import './ParticipantsRow.css'

function ParticipantsRow({ participantImage, participantNumber, participantGroup }) {
    const history = useHistory()
    const handleIndividualParticipantClick = () => {
        history.push("/individual-participant")
    }
    return (
        <div onClick={handleIndividualParticipantClick} className="participants__row" >
            <img src={participantImage} alt="" />
            <div className="participants__row__numbers">{participantNumber}</div>
            <div className="participants__row__groupName">{participantGroup}</div>
        </div>
    )
}

export default ParticipantsRow
