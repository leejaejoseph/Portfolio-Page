import React from "react";

function Introduction({handleClose}){
    return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
        <div className='relative flex flex-wrap h-[70vh] w-9/12 rounded-3xl bg-white/80'>
            <div className="flex w-full h-2/6 items-center justify-center">
                <h1 className='text-6xl pt-4 text-center font-Orbitron'>
                    About Me
                </h1>
            </div>
            <div className="flex w-full h-4/6 justify-center overflow-scroll">
                <h4 className="w-9/12 font-Roboto-Mono text-lg tracking-wider">
                    My name is Joseph Lee, and I am a front-end web developer having shifted from media marketing. Software engineering is a means for me to bring life to innovations that expand digital's capabilities. My desires for the "new", questionings of possibilities, and adaptability towards uncertainty are all qualities extensively developed throughout my university and post-undergraduate career in hopes to project manage all aspects from pr and marketing to full-stack development. I took on this project as I love to create something spectacular and worth looking at. I love exploring frameworks and technologies that I don't know how to use such as Blender, AfterEffects, and GLTF and had a blast utilizing different libraries to make this project. Enjoy!
                </h4>
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

export { Introduction }