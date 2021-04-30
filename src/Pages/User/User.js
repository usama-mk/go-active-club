import React from 'react'
import { useState } from 'react'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import './User.css'

function User() {
    const [profilePicture, setProfilePicture]= useState("https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg");
    const [age, setAge]= useState(21);
    const [keywords, setkeywords]= useState("Beach, Summer, Party, Sport");
    const [university, setUniversity]= useState("UM");
    const [faculty, setFaculty]= useState("SBE");
    const [editInfo, setEditInfo]= useState(false);
    const [editProfilepic, setEditProfilePic]= useState(false);


    const editProfileInfo=()=>{
        setEditInfo((previous)=>{
            return(!previous);
        });
    }

    const inputEnter=(e)=>{
        if(e.key==='Enter'){
            setEditInfo(false);
        }
    }

    const editProfilePicture=()=>{
        setEditProfilePic((prev)=>{
            return !prev
        })
    }
    const handleInputChange=(e)=>{
            setProfilePicture(URL.createObjectURL(e.target.files[0]));
            setEditProfilePic(false);
    }

    return (
        <div className="user" >
            <div className="user__heading">
                <div className="user__heading__left">
                    GoActive.Club
                </div>

                <div className="user__heading__right">
                    <img src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="Avatar" />
                </div>
            </div>

            <div className="user__body">
                <div className="user__body__profileInfo">
                    <div className="user__body__profileInfo__image" >
                        <img src={profilePicture} alt="" />
                        <div onClick={editProfilePicture} className="user__body__profileInfo__image__editPhotoBtn" >Edit Photo</div>
                       { editProfilepic? <input type="file" onChange={handleInputChange}/>:<></>}
                    </div>
                    <div className="user__body__profileInfo__description" >
                        <div className="user__body__profileInfo__description_item">
                            <div className="ageLabel label">
                                Age
                            </div>
                            <div className="ageNumber description_item">
                                {editInfo? <input type="number" onKeyPress={(e)=>{inputEnter(e)}} onChange={(e)=>setAge(e.target.value)} value={age} /> :age}
                            </div>
                        </div>

                        <div className="user__body__profileInfo__description_item">
                            <div className="keywordsLabel label">
                                Keywords
                            </div>
                            <div className="keywords description_item" >
                                {editInfo?<input type="text"  onKeyPress={(e)=>{inputEnter(e)}} onChange={(e)=>setkeywords(e.target.value)} value={keywords}/>:keywords}
                            </div>
                        </div>

                        <div className="user__body__profileInfo__description_item">
                            <div className="universityLabel label">
                                University
                            </div>
                            <div className="university description_item">
                                {editInfo?<input type="text"  onKeyPress={(e)=>{inputEnter(e)}} onChange={(e)=>setUniversity(e.target.value)} value={university}/>:university}
                            </div>
                        </div>

                        <div className="user__body__profileInfo__description_item">
                            <div className="facultyLabel label">
                                Faculty
                            </div>
                            <div className="faculty description_item"  >
                                {editInfo?<input type="text" onKeyPress={(e)=>{inputEnter(e)}} onChange={(e)=>setFaculty(e.target.value)} value={faculty}/>:faculty}
                            </div>
                        </div>

                        <div onClick={editProfileInfo} className="user__body__profileInfo__description_item__editBtn">
                            Edit
                        </div>
                    </div>
                </div>


                {/* Images below profile */}
                <div className="user__body__topImages__wrapper">
                <div className="user__body__topImages">
                    <div className="user__body__topImagee__big">
                        <img src={img1} alt="" />
                    </div>

                    <div className="user__body__topImages__small">
                        <div className="user__body__topImages__small__img" >
                            <img src={img2} alt="" />
                        </div>

                        <div className="user__body__topImages__small__img">
                            <img src={img3} alt="" />
                        </div>

                        <div className="user__body__topImages__small__img">
                            <img src={img1} alt="" />
                        </div>

                        <div className="user__body__topImages__small__img">
                            <img src={img2} alt="" />
                        </div>
                    </div>

                    
                </div>
                
                <div className="user__body__topImages__wrapper__edit">
                <div className="user__body__topImages__wrapper__editBtn">
                        Edit Photos
                    </div>
                </div>

                <div className="user__body__topImages__wrapper__myBookedTrips">
                <div className="user__body__topImages__wrapper__myBookedTrips__btn">
                        My Booked trips
                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}

export default User
