// import './App.css';
// import 'swiper/css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import Getoffer from './components/Getoffer';
import { useEffect, useState } from 'react';
// import ChromePage from './components/ChromePage';
import MobileRecharge from './App';
import Getofffer from './component/rechargeFile';

function Middlepage() {
    const [show, setshow] = useState(true)
    useEffect(() => {
        function isInstagramBrowser() {
            var ua = navigator.userAgent || navigator.vendor || window.opera;
            return (ua.indexOf('Instagram') > -1) || (ua.indexOf('FBAN') > -1) || (ua.indexOf('FBAV') > -1);
        }

        function redirectToChrome() {
            const currentUrl = window.location.href; // Get the current URL
            const androidUrl = `intent://${currentUrl}#Intent;scheme=https;package=com.android.chrome;end;`;
            const fallbackUrl = currentUrl; // Use the current URL as the fallback
        
            if (/android/i.test(navigator.userAgent)) {
                window.location.href = androidUrl;
            } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                alert('To complete your payment, please open this link in Safari or Chrome.');
            } else {
                window.location.href = fallbackUrl;
            }
        }
        

        if (isInstagramBrowser()) {
            setshow(false)
            redirectToChrome();
        } else {
            setshow(true)
        }

    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MobileRecharge />} />
                <Route path="/recharge" element={<Getofffer />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Middlepage;
