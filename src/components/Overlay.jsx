import React, { useEffect, useState } from "react";
import { Introduction } from "./pages/Introduction";
import { Frameworks } from "./pages/Frameworks";
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
                return <Introduction handleClose={() => {setClicked(false); navigate('/');}}/>;
            case '/frameworks':
                return <Frameworks handleClose={() => {setClicked(false); navigate('/');}}/>
            }
    }

    return (
        <div className={clicked ? 'absolute z-30' : 'hidden'}>
            {swapPage()}
        </div>
    )
}

export { Overlay }