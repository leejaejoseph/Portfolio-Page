import React from "react";

function Frameworks({handleClose}){
    return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
        <div className='relative flex flex-wrap h-[70vh] w-9/12 rounded-3xl bg-white/80'>
            <div className="flex w-full h-2/6 items-center justify-center">
                <h1 className='text-6xl pt-4 text-center font-Orbitron'>
                    Languages/Frameworks
                </h1>
            </div>
            <div className="flex w-full h-4/6 justify-center overflow-scroll">
                s
            </div>
            <div className="fixed w-9/12 mt-10 px-12 flex justify-end">
                <button className='font-Orbitron text-4xl flex' onClick={handleClose}>
                    x
                </button>
            </div>
        </div>
    </div>
    )
}

export { Frameworks }