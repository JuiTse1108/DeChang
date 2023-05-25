import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Geocode from "react-geocode";
import './LocationItem.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function LocationItem() {
    // 載入geocode，取得使用者當前位置及設定為座標渲染至地圖
    const apiKey = import.meta.env.VITE_API_KEY
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('zh-TW');
    Geocode.setRegion("tw");
    const [currentLocation, setCurrentLocation] = useState({ lat: null, lng: null });

    useEffect(() => {
        const getLocation = async () => {
            try {
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lng: longitude });
            } catch (error) {
                console.error(error);
            }
        };

        const getCurrentPosition = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
        };

        const loadMap = async () => {
            await getLocation();
        };

        // 偵聽地圖載入完成事件
        window.addEventListener("load", loadMap);

        return () => {
            // 清除事件監聽器
            window.removeEventListener("load", loadMap);
        };
    }, []);

    const center = {
        lat: currentLocation.lat,
        lng: currentLocation.lng
    }



    return (
        <React.Fragment>
            <div className='mapContainer'>
                <div className='mapBox'>
                    <LoadScript googleMapsApiKey={apiKey}>
                        <GoogleMap
                            center={currentLocation}
                            zoom={12}
                            id='map'
                            onLoad={() => { }}
                        >
                            {currentLocation.lat && currentLocation.lng && <Marker position={currentLocation} />}
                        </GoogleMap>
                    </LoadScript>
                    <hr 
                        className='gap'
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default LocationItem;