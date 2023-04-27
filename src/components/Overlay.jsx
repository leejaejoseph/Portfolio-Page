import React, { useEffect, useState } from "react";
import { AboutMePage } from "./pages/AboutMePage";
import { useLocation, useNavigate } from "react-router-dom";

function Overlay(props) {
    const [clicked, setClicked] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(()=> {
        if (location.pathname !== '/') {
            setClicked(location.pathname);
        }
    }, [location])

    function swapPage() {
        switch (clicked) {
            case '/about':
                return <AboutMePage handleClose={() => {setClicked(false); navigate('/');}}/>;
        }
    }

    return (
        <div className={clicked ? 'absolute z-30 w-full h-full' : 'hidden'}>
            {swapPage()}
        </div>
    )
}

export { Overlay }