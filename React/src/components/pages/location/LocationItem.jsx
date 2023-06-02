import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import mapData from "../../../assets/data/map.json"
import './LocationItem.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function LocationItem() {
    const [markers, setMarkers] = useState('');
    const [TheLocation, setTheLocation] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    //Google Map標記餐廳位置
    const apiKey = import.meta.env.VITE_API_KEY;
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('zh-TW');
    Geocode.setRegion("tw");

    const handleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCurrentLocation({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    };

    useEffect(() => {
        // 異步操作，載入地圖資料並設置標記
        const loadMapData = async () => {
            Geocode.setApiKey(apiKey);
            Geocode.setLanguage('zh-TW');
            Geocode.setRegion('tw');

            const loadedMarkers = await Promise.all(
                mapData.records.map(async (record) => {
                    const response = await Geocode.fromLatLng(
                        parseFloat(record.latitude),
                        parseFloat(record.longitude)
                    );
                    const address = response.results[0].formatted_address;

                    return {
                        sitename: record.sitename,
                        latitude: parseFloat(record.latitude),
                        longitude: parseFloat(record.longitude),
                        address: address,
                        telephone: record.telephone,
                    };
                })
            );
            setMarkers(loadedMarkers);
        };

        handleCurrentLocation();
        loadMapData();
    }, [apiKey]);

    const center = {
        lat: 23.97565,
        lng: 120.9738819,
    };

    const mapOptions = {
        disableDefaultUI: true,
    };

    const handleMarkerClick = (location) => {
        setTheLocation(location);
    };

    return (
        <React.Fragment>
            <div className='mapContainer'>
                <div className='storeInfo'>
                    <div className='storeBox'>
                        <div className='storeItem'>
                            <i className="bi bi-shop"></i>Name : <span className="siteItem">{TheLocation.sitename}</span></div>
                        <div className='storeItem'>
                            <i className="bi bi-pin-map-fill"></i>Address : <span className="siteItem">{TheLocation.address}</span></div>
                        <div className='storeItem'>
                            <i className="bi bi-telephone-fill"></i>Phone : <span className="siteItem">{TheLocation.telephone}</span></div>
                        <div className='storeItem'>
                            <i className="bi bi-clock-fill"></i>Opening Hours
                            <div className='dayBox'>
                                <div className='day'>Mon ~ Fri<span className='time'>10:30 ~ 22:00</span></div>
                                <div className='day'>Sat<span className='time'>10:00 ~ 23:00</span></div>
                                <div className='day'>Sun<span className='time'>10:00 ~ 21:30</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='mapBox'>
                        <LoadScript googleMapsApiKey={apiKey}>
                            <GoogleMap
                                center={center}
                                zoom={7}
                                options={{
                                    mapTypeControl: false,
                                    streetViewControl: false,
                                }}
                                id='map'
                                onLoad={() => { }}
                            >
                                {Array.from(markers).map((marker) => (
                                    <Marker
                                        key={marker.sitename}
                                        position={{ lat: marker.latitude, lng: marker.longitude }}
                                        onClick={() => handleMarkerClick(marker)}
                                    />
                                ))}
                                {/* {currentLocation && (
                                    <Marker
                                        position={currentLocation}
                                        icon={{
                                            path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                                            fillColor: 'blue',
                                            fillOpacity: 1,
                                            strokeColor: 'white',
                                            strokeWeight: 2,
                                            scale: 6,
                                        }}
                                    />
                                )} */}
                                <Marker
                                    position={currentLocation}

                                />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}


export default LocationItem;