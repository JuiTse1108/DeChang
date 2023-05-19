import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Geocode from "react-geocode";
import './LocationItem.css'

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

    //載入路線服務與路線顯示圖層
    
    return (
        <div className='mapContainer'>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    center={currentLocation}
                    zoom={10}
                    id='map'
                    onLoad={() => { }}
                >
                    {currentLocation.lat && currentLocation.lng && <Marker position={currentLocation} />}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default LocationItem;