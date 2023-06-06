import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import mapData from "../../../assets/data/map.json"
import './LocationItem.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function LocationItem() {

    //Google Map標記餐廳位置
    const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('zh-TW');
    Geocode.setRegion("tw");

    const center = {
        lat: 23.97565,
        lng: 120.9738819,
    }

    const defaultOptions = {
        mapTypeControl: false,
        streetViewControl: false,
        disableDefaultUI: true
    }
    const aikey = import.meta.env.VITE_OPENAI_API_KEY;
    console.log(aikey)
    return (
        <React.Fragment>
            <div className='mapContainer'>
                <div className='storeInfo'>
                    <div className='storeBox'>
                        <React.Fragment>
                            <div className='storeItem'>
                                <i className="bi bi-shop"></i>Name : <span className="siteItem">{location.sitename}</span></div>
                            <div className='storeItem'>
                                <i className="bi bi-pin-map-fill"></i>Address : <span className="siteItem">{location.address}</span></div>
                            <div className='storeItem'>
                                <i className="bi bi-telephone-fill"></i>Phone : <span className="siteItem">{location.telephone}</span></div>
                            <div className='storeItem'>
                                <i className="bi bi-clock-fill"></i>Opening Hours
                                <div className='dayBox'>
                                    <div className='day'>Mon ~ Fri<span className='time'>10:30 ~ 22:00</span></div>
                                    <div className='day'>Sat<span className='time'>10:00 ~ 23:00</span></div>
                                    <div className='day'>Sun<span className='time'>10:00 ~ 21:30</span></div>
                                </div>
                            </div>
                        </React.Fragment>
                    </div>
                    <div className='mapBox'>
                        <LoadScript googleMapsApiKey={apiKey}>
                            <GoogleMap
                                center={center}
                                zoom={7}
                                options={defaultOptions}
                                id='map'
                                onLoad={() => { }}
                            >
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>

            </div>
        </React.Fragment >
    );
}


export default LocationItem;