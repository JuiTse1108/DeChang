import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import './LocationItem.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function LocationItem() {

    //Google Map標記餐廳位置
    const apiKey = import.meta.env.VITE_GOOGLEMAP_API_KEY;
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage('zh-TW');
    Geocode.setRegion('tw');

    const center = {
        lat: 23.97565,
        lng: 120.9738819,
    }

    const defaultOptions = {
        mapTypeControl: false,
        streetViewControl: false,
        disableDefaultUI: true
    }
    //先取得map.json
    const fetchData = async () => {
        const response = await fetch('../../src/assets/data/map.json')
        const data = await response.json()
        return data.records
    }

    const [data, setData] = useState([]);
    const [siteName, setSiteName] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const records = await fetchData();
            setData(records);
        }

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
        })
        getData();
    }, [])

    return (
        <React.Fragment>
            <div className='mapContainer'>
                <div className='storeInfo'>
                    <div className='storeBox'>
                        <div className='storeItem'>
                            <i className='bi bi-shop'></i>Name : <span className='siteItem'>{siteName}</span></div>
                        <div className='storeItem'>
                            <i className='bi bi-pin-map-fill'></i>Address : <span className='siteItem'>{address}</span></div>
                        <div className='storeItem'>
                            <i className='bi bi-telephone-fill'></i>Phone : <span className='siteItem'>{telephone}</span></div>
                        <div className='storeItem'>
                            <i className='bi bi-clock-fill'></i>Opening Hours
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
                                options={defaultOptions}
                                id='map'
                                onLoad={() => { }}
                            >
                                {data.map((location, index) => {
                                    return (
                                        <Marker
                                            key={index}
                                            position={{
                                                lat: parseFloat(location.latitude),
                                                lng: parseFloat(location.longitude)
                                            }}
                                            onClick={() => {
                                                setSiteName(location.sitename);
                                                setAddress(location.address);
                                                setTelephone(location.telephone);
                                            }}
                                        />
                                    )
                                })}
                                {userLocation && (
                                    <Marker
                                        position={userLocation}
                                        title={"您的位置"}
                                    />
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>

            </div>
        </React.Fragment >
    );
}


export default LocationItem;