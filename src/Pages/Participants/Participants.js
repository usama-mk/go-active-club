import React from 'react'
import './Participants.css'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import Map from '../../Components/Map/Map'
import ParticipantsRow from '../../Components/ParticipantsRow/ParticipantsRow'
import { useState } from 'react'


function Participants() {
    const [participantsRow, setParticipantsRow]= useState([
        {
            participantImage:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1080529720%2F960x0.jpg%3Ffit%3Dscale",
            participantNumber:"21",
            participantGroup:"Law Faculty" 
        },
        {
            participantImage:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/model-lucky-blue-smith-poses-at-ralph-lauren-purple-label-news-photo-1586817276.jpg",
            participantNumber:"32",
            participantGroup:"Fasos" 
        },
        {
            participantImage:"https://images.squarespace-cdn.com/content/v1/5a402fd22aeba58d4a35a916/1562439869831-NCWTNXLUPBY43QJ397XJ/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Models-Paris-Fashion-Week-Haute-Couture-Fall-Winter-2019-2020-Alexis-Breugelmans-20190703-014.jpg?format=2500w",
            participantNumber:"12",
            participantGroup:"SBE" 
        },

    ])
    return (
        <div className="participants" >
            {/* Heading */}
            <div className="participants__heading">
                <div className="allOffers__heading__left">
                    GoActive.Club
                </div>

                <div className="participants__heading__right">
                    <img src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="Avatar" />
                </div>
            </div>

            {/* Body */}
            <div className="participants__body" >
                 
                {/* body info */}
                <div className="participants__body__offerInfo">
                    {/* Left Container */}
                    <div className="participants__body__offerInfo__leftContainer">
                        <div className="participants__body__offerInfo__leftContainer__info" >
                            <div className="participants__body__offerInfo__leftContainer__info__top">
                                5 day beginner surf course for UM group
                            </div>
                            <div className="participants__body__offerInfo__leftContainer__info__sub">
                                Gota D'Agua Surf Camp
                            </div>
                        </div>

                        

                        
                    </div>

                    {/* Right Container */}

                    <div className="participants__body__offerInfo__rightContainer">
                    <div className="participants__body__offerInfo__rightContainer__offerDate">
                            1st March - 7th March 2021
                            </div>
                        <div className="participants__body__offerInfo__rightContainer__price">
                            <div className="participants__body__offerInfo__rightContainer__price__left">
                                250 Euros
                                <div className="participants__body__offerInfo__rightContainer__price__left__description">
                                    offer expires on 01.01.2021
                        </div>
                            </div>

                            <div className="participants__body__offerInfo__rightContainer__price__reserve">
                                Reserve
                        </div>
                        </div>

                        

                         


                    </div>  {/* Right container ends */}


                </div>

{/* Other participants list */}
        <div className="participants__list" >
            {participantsRow.map((participant)=>{
                return <ParticipantsRow participantImage={participant.participantImage}  participantNumber={participant.participantNumber} participantGroup={participant.participantGroup} />

            })}            
        </div>
            </div>


        </div>
    )
}

export default Participants
