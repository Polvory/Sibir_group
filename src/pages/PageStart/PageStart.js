import React, {useEffect, useState, useRef } from "react"
import s from "./PageStart.module.css"
import kursor from "kursor"
import {PageStartContent} from"./PageStartContent"
import img1 from "./images/1.jpg"
import {TweenMax, TimelineLite, Power3} from "gsap"
import logo1 from "./images/logo1.png"

import logo2 from "./images/logo2.png"
import logo3 from "./images/logo3.png"
// import stayle from './kursor.css'


export const PageStart = () => {

    // useEffect(() =>{ new kursor({
    //     color: '#fff',
    //     type: 4
    // })}, [])
    let joooo = useRef(null)

    let joooo2 = useRef(null)
    let joooo3 = useRef(null)


    useEffect(() =>{


    console.log(joooo)

    
      
       }) 

       


    const [state, setState] = useState(0)
    const updateNow =(v)=>{ 
        
        setState(v)
        console.log(v + "1")
        
        // TweenMax.to(joooo, 0.6, {skale: 1.1, 
       
        // ease: Power3.ease0ut})
        // TweenMax.to(joooo2,joooo3, 0.8, {width:"+=10"})
       
           
      
       
    }
    const updateNow2 =(v)=>{ 
        
        setState(v)
        console.log(v + "2")
       
        

    }
    const updateNow3 =(v)=>{ 
        
        setState(v)
        console.log(v + "3")
        
    }

return (

<>

<div className={s.PageStart_parent_grid} >
    <div  ref={el => (joooo = el)}  className={s.PageStart_SGMedic}>
     
        <PageStartContent logotip={logo1}  fn={updateNow} 
        name="SG Medic" text="Лечение в Южной Корее и Израиле" />
        
    </div>
    <div  ref={el => (joooo2 = el)}  className={s.PageStart_SibirTouristic}>
    <PageStartContent logotip={logo2}  fn={updateNow2}  name="Sibir Touristic" text="Путешествия на Байкал и Восточную Сибирь." />
    
    </div>
    <div ref={el => (joooo3 = el)}  className={s.PageStart_SibirProKad}>
    <PageStartContent logotip={logo3} fn={updateNow3}  name="Sibir ProKad." text="Полный спектр работ с недвижимостью" />

    </div>



</div>
    </>

)
    

}