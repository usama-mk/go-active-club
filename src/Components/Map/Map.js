import React from 'react'
import { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import './Map.css'

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "200px",
        height: "200px",
        zoom: 10
    })
    return (
        <div className="map" >
            <ReactMapGL className="map" {...viewport} mapboxApiAccessToken="pk.eyJ1IjoiY2xpZW50cy1maXJlYmFzZSIsImEiOiJja28wbXpsbWQwZXMyMm5ud3M0bWs0bTJuIn0.Fi78C9sKb-9P4w9tx9A6dg" 
            container='map'
            onViewportChange={(viewport)=>{setViewport(viewport)}}
            mapStyle= 'mapbox://styles/clients-firebase/cko0npu5q01a117pqnrh2ruj6'
            >
                {/* markers */}
            </ReactMapGL>
        </div>
    )
}

export default Map
