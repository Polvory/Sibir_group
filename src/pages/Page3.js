import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap'

import style from "../css/testGrid.css"






function alertTest() {
    console.log("test")
}

export const Page3 = () => {

    let testGrid = useRef(null);
    let testGrid2 = useRef(null);
    useEffect(() => {
        console.log(testGrid);
       TweenMax.from(
        testGrid,
         1.8,
         {
             opacity: 1,
             x: -130,
             ease: Power3.easeOut
        
         }  
       );
       TweenMax.from(
        testGrid2,
         .8,
         {
             opacity: 1,
             x: +30,
             y: -30,
             rotation: 27,
             ease: Power3.easeOut
        
         }  
       )
    }, [])




    return (
        <>
        <div className="grid">
           <div
           ref={el => {testGrid = el}}
           >Тест 1</div>
           
           <div  >
           >Тест 2</div>
           <div><div
           ref={el => {testGrid2 = el}}
           >Тест 3</div></div>
           <div>Тест 4</div>
           <div>Тест 5</div>
           <div>Тест 6</div>
           <div>Тест 7</div>
           <div>
               <button onClick={alertTest}>Хей</button>
           </div>


        </div>
       
        <div>хей</div>
        </>
    )
}