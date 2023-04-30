import React, { useEffect, useState } from "react";
import { Introduction } from "./pages/Introduction";
import { Frameworks } from "./pages/Frameworks";
import { useLocation, useNavigate } from "react-router-dom";
import { useProgress } from "@react-three/drei";
import { loading } from "./utility/fileAssets";


function Overlay(props) {
    const [clicked, setClicked] = useState(false);
    const [render, setRender] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const { progress } = useProgress();

    useEffect(()=> {
        if (progress === 100) {
            setRender(true);
        }
    }, [progress])

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
        <>
            <div className={render ? 'hidden': 'absolute z-40'}>
                <div className="w-[100vw] h-[100vh] bg-[#D9DDDC] flex justify-center items-center flex-col font-Orbitron text-6xl gap-10">
                    <h1>Please wait for the Application to Load</h1>
                    <img src={loading} alt='loading gif'/>
                    <h5 className="text-2xl">Use Left-Mouse-Click Move, Access Links, and open Pop-ups.</h5>
                    <h6 className="text-xl">Recommended to use FireFox or Edge as Chrome will not hardware accelerate. Mobile will not work either.</h6>
                </div>
            </div>
            <div className={clicked ? 'absolute z-30' : 'hidden'}>
                {swapPage()}
            </div>
        </>
    )
}

export { Overlay }