import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import './LocationItem.css'

function LocationItem() {
    const apiKey = import.meta.env.VITE_API_KEY
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('zh-TW');
    Geocode.setRegion("tw");
    const [currentLocation, setCurrentLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);

    const mapStyle = {
        width: "600px",
        height: "400px"
    }

    const center = {
        lat: currentLocation.lat,
        lng: currentLocation.lng
    }

    return (
        <React.Fragment>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    center={currentLocation}
                    zoom={10}
                >
                    {/* <Marker position={currentLocation} /> */}
                </GoogleMap>
            </LoadScript>
        </React.Fragment >
    );
}

export default LocationItem;