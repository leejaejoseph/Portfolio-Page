import React, { useState } from "react";
import Slider from "react-slick";
import { awsec2, blender, javascript, css, express, git, html, nodeJs, react, tailwind, threeJs, webpack } from '../utility/fileAssets';


function Frameworks({handleClose}){
    const images = [ html, css, javascript, react, express, git, nodeJs, webpack, tailwind, threeJs, awsec2, blender ]
    const caption = [ 'HTML', 'CSS', 'ES6', 'React', 'Express.js', 'Git', 'Node.js', 'Webpack', 'TailwindCSS', 'three.js', 'AWS EC2', 'Blender'];
    
    const [index, setIndex] = useState(0);

    const NextImg = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </div>
        )
    }
    
    const PrevImg = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </div>
        )
    }
    
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow:3,
        centerMode: true,
        centerPadding: 0,
        nextImg: <NextImg/>,
        prevImg: <PrevImg/>,
        beforeChange: (curr, next) => setIndex(next),
    }


    return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
        <div className='relative flex flex-wrap h-[70vh] w-9/12 rounded-3xl bg-white/80'>
            <div className="flex w-full h-2/6 items-center justify-center">
                <h1 className='text-6xl pt-4 text-center font-Orbitron'>
                    Languages/Frameworks
                </h1>
            </div>
            <div className="carousel">
                <Slider {...settings}>
                    {images.map(( img, idx ) =>
                        <div className={idx === index ? "slide activeSlide" : "slide"} key={idx}>
                            <img src={img} alt={img} />
                            <div className="text-2xl font-Roboto-Mono">{caption[idx]}</div>
                        </div>)
                    }
                </Slider>
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