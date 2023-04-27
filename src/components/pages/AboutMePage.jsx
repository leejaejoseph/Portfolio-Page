import React from "react";

function AboutMePage({handleClose}){
    return (
    <div className="flex justify-center items-center">
        <div className='w-9/12 relative flex h-[70vh] justify-center flex-wrap rounded-3xl bg-white/40'>
            <div className='w-full'>
                <h1 className='w-full text-center text-6xl pt-20 font-Roboto-Mono'>
                About Me
                </h1>
            </div>
            <div className='w-9/12 text-3xl font-Roboto-Mono'>
                <h4>
                My name is Joseph Lee, and I am a front-end web developer having shifted from media marketing. Software engineering is a means for me to bring life to innovations that expand digital's capabilities. My desires for the "new", questionings of possibilities, and adaptability towards uncertainty are all qualities extensively developed throughout my university and post-undergraduate career in hopes to project manage all aspects from pr and marketing to full-stack development. This is in belief that even the best technologies have often seen abandonment due to its poor branding.
                </h4>
            </div>
            <button className='fixed right-96 text-6xl pt-20 pl-6' onClick={handleClose}>
                x
            </button>
        </div>
    </div>
    )
}

export { AboutMePage }