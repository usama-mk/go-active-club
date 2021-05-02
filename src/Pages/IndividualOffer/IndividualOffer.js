import React from 'react'
import './IndividualOffer.css'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import Map from '../../Components/Map/Map'
import { useHistory } from 'react-router'
import Heading from '../../Components/Heading/Heading'


function IndividualOffer() {
    const history = useHistory();

    const handleParticipants = () => {
        history.push("/participants")
    }

    const handleReserveOffer = () => {
        history.push("/bookings")
    }
    const handleInfoOnCamp = () => {
        history.push("/info-oncamp")
    }

    return (
        <div className="individualOffer" >
            {/* Heading */}
            <Heading />

            {/* Body */}
            <div className="individualOffer__body" >
                <div className="individualOffer__body__topImages">
                    <div className="individualOffer__body__topImagee__big">
                        <img src={img1} alt="" />
                    </div>

                    <div className="individualOffer__body__topImages__small">
                        <div className="individualOffer__body__topImages__small__img" >
                            <img src={img2} alt="" />
                        </div>

                        <div className="individualOffer__body__topImages__small__img">
                            <img src={img3} alt="" />
                        </div>

                        <div className="individualOffer__body__topImages__small__img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="individualOffer__body__topImages__small__img">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
                {/* body info */}
                <div className="individualOffer__body__offerInfo">
                    {/* Left Container */}
                    <div className="individualOffer__body__offerInfo__leftContainer">
                        <div className="individualOffer__body__offerInfo__leftContainer__info" >
                            <div className="individualOffer__body__offerInfo__leftContainer__info__top">
                                5 day beginner surf course for UM group
                            </div>
                            <div onClick={handleInfoOnCamp} className="individualOffer__body__offerInfo__leftContainer__info__sub">
                                Gota D'Agua Surf Camp
                            </div>
                        </div>

                        <div className="individualOffer__body__offerInfo__leftContainer__description">
                            <div className="individualOffer__body__offerInfo__leftContainer__description__heading">
                                Description of trip
                            </div>
                            <div>
                                Surf camp walking distance to the beach. great house with pooland
                                large outside are. We throw the best parties in the areaa and there are otherwise
                                plenty of restaurants and bars in the next door.
                            </div>
                        </div>

                        <div className="individualOffer__body__offerInfo__leftContainer__included" >
                            <div className="individualOffer__body__offerInfo__leftContainer__included__heading" >
                                Included in the package
                            </div>
                            <div className="individualOffer__body__offerInfo__leftContainer__included__arrow">
                                == Number of nights: 5
                                <div className="individualOffer__body__offerInfo__leftContainer__included__arrow__bullets" >
                                    <div> o Breakfast Included</div>
                                    <div>o Yoga 3x Included</div>
                                    <div> o Bikes and surf gear Included</div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Container */}

                    <div className="individualOffer__body__offerInfo__rightContainer">
                        <div className="individualOffer__body__offerInfo__rightContainer__price">
                            <div className="individualOffer__body__offerInfo__rightContainer__price__left">
                                250 Euros
                                <div className="individualOffer__body__offerInfo__rightContainer__price__left__description">
                                    offer expires on 01.01.2021
                        </div>
                            </div>

                            <div onClick={handleReserveOffer} className="individualOffer__body__offerInfo__rightContainer__price__reserve">
                                Reserve
                        </div>
                        </div>

                        <div className="individualOffer__body__offerInfo__rightContainer__offerDate">
                            1st March - 7th March 2021
                            </div>

                        <div className="individualOffer__body__offerInfo__rightContainer__seeAll">
                            <div className="individualOffer__body__offerInfo__rightContainer__seeAll__left" >
                                <div className="individualOffer__body__offerInfo__rightContainer__seeAll__left__heading">
                                    Faculties
                                </div>
                                <div className="individualOffer__body__offerInfo__rightContainer__seeAll__left__items">
                                    <div>==SBE</div>
                                    <div> ==Fasos</div>
                                    <div>==FMHL</div>
                                    <div>==UCM</div>
                                </div>
                            </div>
                            <div className="individualOffer__body__offerInfo__rightContainer__seeAll__right" >
                                <div onClick={handleParticipants} className="individualOffer__body__offerInfo__rightContainer__seeAll__right__images" >
                                    <div className="individualOffer__body__offerInfo__rightContainer__seeAll__right__images" ><img src={img1} alt="" />
                                        <img src={img2} alt="" /></div>
                                    <div className="individualOffer__body__offerInfo__rightContainer__seeAll__right__images" ><img src={img3} alt="" />
                                        <img src={img1} alt="" /></div>
                                    <div className="individualOffer__body__offerInfo__rightContainer__seeAll__right__images" ><img src={img2} alt="" />
                                        <img src={img3} alt="" /></div>
                                </div>
                                <div onClick={handleParticipants} className="individualOffer__body__offerInfo__rightContainer__seeAll__right__seeAllButton" >
                                    See All
                            </div>
                            </div>
                        </div>

                        <div className="individualOffer__body__offerInfo__rightContainer__map">
                            <Map />
                        </div>


                    </div>  {/* Right container ends */}


                </div>
            </div>


        </div>
    )
}

export default IndividualOffer
