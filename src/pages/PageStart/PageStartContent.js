import React, {useRef, useState} from "react"


import s from "./PageStartContent.module.css"
import {TweenMax, TimelineLite, Power3} from "gsap"
// import style from "./button.css"











export const PageStartContent = (props) => {
   


    let gridLogo = useRef(null)
    let gridh1 = useRef(null)
    let gridText = useRef(null)
    let gribody = useRef(null)
    let gributton = useRef(null)


    const [logotip, setlogotip] = useState(0);

    


    const MouseEnter =()=>{
        console.log("Work")
        // TweenMax.to(gribody, 0.8, {scale: 1.1}, .2)
       
        TweenMax.to(gridLogo, 0.6, {scale: 0.7, y:-150}, .2)
        TweenMax.staggerTo([gridh1, gridText, gributton ], 0.8, {opacity:1, y:-10}, .1)
        // TweenMax.to(gridh1, 1, {opacity:1, y:-10}, .5)
        // TweenMax.to(gridText, 1, {opacity:1,  y:-10}, .7)
        // TweenMax.to(gributton, 0.8, {opacity:1,  y:-10}, .9)
        props.fn(1)
return

    }
    const MouseEnd =()=>{
        console.log("End")
        TweenMax.to(gridLogo, 0.6, { scale: 1, opacity:1, y:0 }, .2)
        TweenMax.staggerTo([gributton, gridText, gridh1 ], 0.6, {opacity:0, y:0}, .1)
    
        props.fn(0)
        return

    }


    return (

        <>
   
    <div ref={el => (gribody = el)}   className={s.Content_grid  } onMouseEnter={MouseEnter} onMouseLeave={MouseEnd} >
    <div className={s.Content_grid__text}>
    <img ref={el => (gridLogo = el)}  className={s.Content_grid__logo} src={props.logotip}/>

    <h1  ref={el => (gridh1 = el)} >{props.name}</h1>
    <p    ref={el => (gridText = el)}  >{props.text}</p>
    <button  ref={el => (gributton = el)} className={s.Content_grid__button}>Узнать Больше</button>
    </div>
    <div className={s.Content_grid__img}>
    
    </div>
    </div>

        </>
    )}