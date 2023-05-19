import React from 'react';
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Geocode from "react-geocode";

function Footer() {
    //點擊取得經緯度
    function handleLinkClick() {
        const apiKey = import.meta.env.VITE_API_KEY
        Geocode.setApiKey(apiKey);
        Geocode.setLanguage('zh-TW');
        Geocode.setRegion("tw");
        
        const center = '台北市信義區市府路45號';
        Geocode.fromAddress(center).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
                const size = 'width=800,height=600';
                const left = (screen.width / 2) - (800 / 2);
                const top = (screen.height / 2) - (600 / 2);
                window.open(mapUrl, "_blank",`${size},left=${left},top=${top}`);
            },
            (error) => {
              console.error(error);
            }
        )
    }

    return (
        <footer className="footer">
            <div className="footerNav">
                <div className="footernavButton">
                    <a href="/contact" className="footernavLink">Contact Us</a>
                </div>
                <div className="info">
                    <div className="infoItem"><i className="bi bi-building-fill"></i><a href="/">德昌股份有限公司</a></div>
                    <div className="infoItem"><i className="bi bi-pin-map"></i>
                        <a onClick={handleLinkClick}>台北市信義區市府路45號</a></div>
                    <div className="infoItem"><i className="bi bi-telephone"></i><a href="tel:02-8101-8800">02-8101-8800</a></div>
                    <div className="infoItem"><i className="bi bi-envelope"></i><a href="mailto:dpo@tfc101.com.tw">dpo@tfc101.com.tw</a></div>
                </div>
                <div className='media'>
                    <a href="https://www.facebook.com" target='_blank' className='mediaItem'><i className="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com" target='_blank' className='mediaItem'><i className="bi bi-instagram"></i></a>
                    <a href="https://www.twitter.com" target='_blank' className='mediaItem'><i className="bi bi-twitter"></i></a>
                    <a href="https://line.me/zh-hant/" target='_blank' className='mediaItem'><i className="bi bi-line"></i></a>
                    <div className='copyright'>Dechang Enterprise ©Copyright 2023</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
