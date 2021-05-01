import React from 'react'
import { useState } from 'react/cjs/react.development'
import './Checkout.css'

function Checkout() {
   
    const [images, setImages] = useState([
        {
            participantImage: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1080529720%2F960x0.jpg%3Ffit%3Dscale"

        },
        {
            participantImage: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/model-lucky-blue-smith-poses-at-ralph-lauren-purple-label-news-photo-1586817276.jpg"

        },
        {
            participantImage: "https://images.squarespace-cdn.com/content/v1/5a402fd22aeba58d4a35a916/1562439869831-NCWTNXLUPBY43QJ397XJ/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Models-Paris-Fashion-Week-Haute-Couture-Fall-Winter-2019-2020-Alexis-Breugelmans-20190703-014.jpg?format=2500w"

        },
        {
            participantImage: "https://images.squarespace-cdn.com/content/v1/5a402fd22aeba58d4a35a916/1562439869831-NCWTNXLUPBY43QJ397XJ/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/Models-Paris-Fashion-Week-Haute-Couture-Fall-Winter-2019-2020-Alexis-Breugelmans-20190703-014.jpg?format=2500w"

        }

    ])

    return (
        <div className="checkout" >

            {/* heading */}
            <div className="checkout__heading">
                <div className="allOffers__heading__left">
                    GoActive.Club
                </div>

                <div className="checkout__heading__right">
                    <img src="https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg" alt="Avatar" />
                </div>
            </div>

            {/* checkout body left */}
            <div className="checkout__body">
                <div className="checkout__body__left">
                <div className="checkout__body__left__images" >
                    {images.map((image) => {
                        return (
                            <img src={image.participantImage} alt="Participant image" />
                        )
                    })}
                </div>
                

                <div className="checkout__body__offerInfo__leftContainer__info" >
                            <div className="checkout__body__offerInfo__leftContainer__info__top">
                                5 day beginner surf course for UM group
                            </div>
                            <div className="checkout__body__offerInfo__leftContainer__info__sub">
                                Gota D'Agua Surf Camp
                            </div>
                        </div>

                
                </div>

                 {/* checkout body right= payments */}
            <div className="checkout__body__right" >
                Payments
            </div>
            </div>


        </div>
    )
}

export default Checkout
