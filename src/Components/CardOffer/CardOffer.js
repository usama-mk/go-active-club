import React from 'react'
import './CardOffer.css'
import drop from '../../assets/images/drop.png'
import { useState } from 'react'

function CardOffer({startDate, endDate, year, price, participantsNumber}) {
     

    return (
        <div className="cardOffer"  >
{/* Card Heading */}
            <div className="cardOffer__heading" >
                <div className="cardOffer__heading__image">
                <img src={drop} alt="drop img"/>
                </div>

                <div className="cardOffer__heading__info" >
                <div className="cardOffer__heading__info__heading" >
                    Gota D'Agua Surf Camp
                </div>
                <div className="cardOffer__heading__info__subheading" >
                    5 day begineer surf course for UM group
                </div>
                </div>

                <div className="cardOffer__heading__price" >
                    {price} Euro 
                </div>
            </div>
{/* Card Date Range */}
            <div className="cardOffer__date">
                <div className="cardOffer__date__range">
                    {startDate} - {endDate} {year}
                </div>
            </div>

{/* Card bottom Info */}

            <div className="cardOffer__moreInfo">
                <div className="cardOffer__moreInfo__aboutOffer">
                    <div className="cardOffer__moreInfo__aboutOffer__details" >
                        Surf Camp at beach front with pool and large outside area.
                    </div>
                    <div className="cardOffer__moreInfo__aboutOffer__button">
                        See Offer
                    </div>
                </div>

                <div className="cardOffer__moreInfo__otherParticipants" >
                    <div className="cardOffer__moreInfo__otherParticipants__number"  >
                        {participantsNumber}
                    </div>

                    <div className="cardOffer__moreInfo__otherParticipants__groups" >
                        <div>
                        » SBE
                        </div>
                        <div>» Fasos</div>
                        <div>» FMHL</div>
                         <div>» UCM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOffer
