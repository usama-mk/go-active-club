import React from 'react'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import Heading from '../../Components/Heading/Heading'
import './IndividualParticipant.css'

function IndividualParticipant() {
    return (
        <div className="individualParticipant" >
            <Heading />

            <div className="individualParticipant__body">
                <div className="individualParticipant__body__profileInfo">
                    <div className="individualParticipant__body__profileInfo__image" >
                        <img src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="" />
                    </div>
                    <div className="individualParticipant__body__profileInfo__description" >
                        <div className="individualParticipant__body__profileInfo__description_item">
                            <div className="ageLabel label">
                                Age
                            </div>
                            <div className="ageNumber description_item">
                                21
                            </div>
                        </div>

                        <div className="individualParticipant__body__profileInfo__description_item">
                            <div className="keywordsLabel label">
                                Keywords
                            </div>
                            <div className="keywords description_item">
                                Beach, Summer, Party, Sport
                            </div>
                        </div>

                        <div className="individualParticipant__body__profileInfo__description_item">
                            <div className="universityLabel label">
                                University
                            </div>
                            <div className="university description_item">
                                UM
                            </div>
                        </div>

                        <div className="individualParticipant__body__profileInfo__description_item">
                            <div className="facultyLabel label">
                                Faculty
                            </div>
                            <div className="faculty description_item">
                                SBE
                            </div>
                        </div>
                    </div>
                </div>


                {/* Images below profile */}
                <div className="individualParticipant__body__topImages">
                    <div className="individualParticipant__body__topImagee__big">
                        <img src={img1} alt="" />
                    </div>

                    <div className="individualParticipant__body__topImages__small">
                        <div className="individualParticipant__body__topImages__small__img" >
                            <img src={img2} alt="" />
                        </div>

                        <div className="individualParticipant__body__topImages__small__img">
                            <img src={img3} alt="" />
                        </div>

                        <div className="individualParticipant__body__topImages__small__img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="individualParticipant__body__topImages__small__img">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualParticipant
