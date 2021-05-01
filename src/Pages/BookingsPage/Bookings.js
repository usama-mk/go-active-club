import React from 'react'
import { useState } from 'react'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import './Bookings.css'

function Bookings() {
    const [profilePicture, setProfilePicture] = useState("https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg");
    const [age, setAge] = useState(21);
    const [keywords, setkeywords] = useState("Beach, Summer, Party, Sport");
    const [university, setUniversity] = useState("UM");
    const [faculty, setFaculty] = useState("SBE");
    const [editInfo, setEditInfo] = useState(false);
    const [editProfilepic, setEditProfilePic] = useState(false);

    return (
        <div className="bookings" >
            <div className="bookings__heading">
                <div className="bookings__heading__left">
                    GoActive.Club
                </div>

                <div className="bookings__heading__right">
                    <img src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="Avatar" />
                </div>
            </div>

            <div className="bookings__body">
                <div className="bookings__body__title">
                    Bookings
                </div>
                <div className="bookings__body__profileInfo">
                    {/*  */}
                    <div className="bookings__body__profileInfo__left">
                        <div className="bookings__body__offerInfo__leftContainer__info" >
                            <div className="bookings__body__offerInfo__leftContainer__info__top">
                                5 day beginner surf course for UM group
                            </div>
                            <div className="bookings__body__offerInfo__leftContainer__info__sub">
                                Gota D'Agua Surf Camp
                            </div>
                        </div>

                        <div className="bookings__body__profileInfo__btn" >
                            View Info
                    </div>
                    </div>
                    {/*  */}
                    <div className="bookings__body__profileInfo__mid__btns">
                        <div className="bookings__body__profileInfo__mid__btn1">
                            Send invite
                            </div>
                        <div className="bookings__body__profileInfo__mid__btn1">
                            Ask a question
                            </div>
                    </div>
                    {/*  */}

                    <div className="bookings__body__offerInfo__rightContainer__seeAll__right" >
                                <div className="bookings__body__offerInfo__rightContainer__seeAll__right__images" >
                                    <div className="bookings__body__offerInfo__rightContainer__seeAll__right__images" ><img src={img1} alt="" />
                                        <img src={img2} alt="" /></div>
                                    <div className="bookings__body__offerInfo__rightContainer__seeAll__right__images" ><img src={img3} alt="" />
                                        <img src={img1} alt="" /></div>
                                    <div className="bookings__body__offerInfo__rightContainer__seeAll__right__images" ><img src={img2} alt="" />
                                        <img src={img3} alt="" /></div>
                                </div>
                                <div className="bookings__body__offerInfo__rightContainer__seeAll__right__seeAllButton" >
                                    See All
                            </div>

                            </div>

                </div>


            </div>


        </div >
    )
}

export default Bookings
