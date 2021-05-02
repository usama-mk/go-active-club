import React from 'react'
import './InfoOnCamp.css'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import Map from '../../Components/Map/Map'
import Heading from '../../Components/Heading/Heading'


function InfoOnCamp() {
    return (
        <div className="infoOnCamp" >
            {/* Heading */}
            <Heading />

            {/* Body */}
            <div className="infoOnCamp__body" >
                <div className="infoOnCamp__body__topImages">
                    <div className="infoOnCamp__body__topImagee__big">
                        <img src={img1} alt="" />
                    </div>

                    <div className="infoOnCamp__body__topImages__small">
                        <div className="infoOnCamp__body__topImages__small__img" >
                            <img src={img2} alt="" />
                        </div>

                        <div className="infoOnCamp__body__topImages__small__img">
                            <img src={img3} alt="" />
                        </div>

                        <div className="infoOnCamp__body__topImages__small__img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="infoOnCamp__body__topImages__small__img">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
                {/* body info */}
                <div className="infoOnCamp__body__offerInfo__wrapper">
                    <div className="infoOnCamp__body__offerInfo">
                        {/* Left Container */}
                        <div className="infoOnCamp__body__offerInfo__leftContainer">
                            <div className="infoOnCamp__body__offerInfo__leftContainer__info" >
                                <div className="infoOnCamp__body__offerInfo__leftContainer__info__top">
                                    5 day beginner surf course for UM group
                            </div>
                                <div className="infoOnCamp__body__offerInfo__leftContainer__info__sub">
                                    Gota D'Agua Surf Camp
                            </div>
                            </div>

                            <div className="infoOnCamp__body__offerInfo__leftContainer__description">
                                <div className="infoOnCamp__body__offerInfo__leftContainer__description__heading">
                                    Description of trip
                            </div>
                                <div>
                                    Surf camp walking distance to the beach. great house with pooland
                                    large outside are. We throw the best parties in the areaa and there are otherwise
                                    plenty of restaurants and bars in the next door.
                            </div>
                            </div>

                        </div>

                        {/* Right Container */}

                        <div className="infoOnCamp__body__offerInfo__rightContainer">


                            <div className="infoOnCamp__body__offerInfo__rightContainer__map">
                                <Map />
                            </div>

                            <div className="infoOnCamp__body__offerInfo__rightContainer__socials" >
                                <i class="fab fa-facebook-f socialIcons fb"></i>
                                <i class="fab fa-twitter socialIcons tw"></i>
                                <i class="fab fa-instagram socialIcons insta"></i>
                                <i class="fab fa-whatsapp socialIcons ws"></i>
                            </div>

                        </div>  {/* Right container ends */}
                    </div>

                    <div className="infoOnCamp__body__offerInfo__footer" >
                        Meet your hosts and instructors
                    </div>

                    <div className="infoOnCamp__body__offerInfo__footer__images" >
                        <img src="https://media.comicbook.com/2020/09/pewdiepie-2--1239058-1280x0.jpeg" alt="" />
                        <img src="https://propakistani.pk/lens/wp-content/uploads/2019/12/Untitled-design13.png" alt="" />
                        <img src="https://www.daily-sun.com/assets/news_images/2019/03/03/_jason-momoa.jpg" alt="" />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default InfoOnCamp
