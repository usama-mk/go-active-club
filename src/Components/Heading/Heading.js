import React from 'react'
import { useHistory } from 'react-router';
import './Heading.css'

function Heading() {
    const history = useHistory();

    const handleUserProfile = () => {
        history.push("/user")
    }
    return (
        <div className="heading">
            <div className="allOffers__heading">
                <div className="allOffers__heading__left">
                    GoActive.Club
                </div>

                <div onClick={() => { history.goBack() }} className="back">
                    <div className="back__btn">
                        Back
                   </div>
                </div>

                <div className="allOffers__heading__right">
                    <img onClick={handleUserProfile} src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="Avatar" />
                </div>
            </div>

        </div>
    )
}

export default Heading
