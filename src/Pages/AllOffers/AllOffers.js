import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router';
import CardOffer from '../../Components/CardOffer/CardOffer'
import './AllOffers.css'

function AllOffers() {
    const [cardOffers, setCartOffers] = useState(
        [
            {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "3. March",
                endDate: "9. March",
                year: "2021",
                price: "250",
                participantsNumber: "30"
            }, {
                startDate: "5. March",
                endDate: "8. March",
                year: "2021",
                price: "250",
                participantsNumber: "25"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            }, {
                startDate: "1. March",
                endDate: "7. March",
                year: "2021",
                price: "250",
                participantsNumber: "20"
            },
        ]
    );

    const history = useHistory();

    const handleUserProfile = () => {
        history.push("/user")
    }
    return (
        <div className="allOffers" >
            {/* Heading */}
            <div className="allOffers__heading">
                <div className="allOffers__heading__left">
                    GoActive.Club
                </div>
                <div className="allOffers__heading__mid">
                    Homepage
                </div>
                <div onClick={handleUserProfile} className="allOffers__heading__right">
                    <img src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="Avatar" />
                </div>
            </div>

            {/* Offers */}
            <div className="allOffers__wrapper" >
                {cardOffers.map((cardOffer) => {
                    return (
                        <CardOffer startDate={cardOffer.startDate} endDate={cardOffer.endDate} year={cardOffer.year} price={cardOffer.price} participantsNumber={cardOffer.participantsNumber} />
                    );
                })}

            </div>

        </div>
    )
}

export default AllOffers
