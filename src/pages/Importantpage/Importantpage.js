import React, {useState, useRef, useEffect} from 'react'
import s from './Importantpage.module.css'
import styled from 'styled-components';
import { Surface } from "gl-react-dom";
import { LinearCopy } from "gl-react";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import img4 from "../../img/4.png"



export const Importantpage = () => {
    





    const transition = GLTransitions[7];


    





    class Slideshow  extends React.Component {
     
     
    
    
    
    
        render() {
     
            
    
        return this.props.progress > 0 ? (
        <GLTransition
          from={this.props.from}
          to={this.props.to}
          progress={this.props.progress}
          transition={transition}
        />
      ) : (
        <LinearCopy>{this.props.from}</LinearCopy>
      );
    }
    };













    const [width, setwidth] = useState(1400);
  
    const Laer2 = styled.div`
    font-size: 1.5em;
    position:fixed;
    height: 100vh;
    z-index:0;
  
    width: ${props => props.width +"px"};
  `;


  let widthlaer = useRef(null)



  useEffect(() =>{

    setwidth(widthlaer.offsetWidth)

    console.log(widthlaer.offsetWidth)
  }, [])


  const [from, setfrom] = useState(img1);
  const [to, setto] = useState(img2);
  const [progress, setprogress] = useState(0);
  constructor(props) {
    super(props);
    this.state = {index: 0} ;
  }

 
 
  const nextimg2 =()=>{
     


    let counter = 0;
    const intervalId = setInterval(() => {
        
        setprogress(progress + 0.1)
        console.log('Hello World');
    // setprogress(progress + 0.1)
    // console.log(progress)
    counter += 1;
  if (counter === 10) {
      console.log('Done');
      clearInterval(intervalId);
    //   this.state.index = 0;

    //   this.setState(state => ({from: state.from = this.state.to}));
   
    
    //   console.log(this.state.from)
    //   console.log(this.state.to)
    //   console.log(Slideshow)


    }
  }, 100);

}

  

    return (


        <>
        <Laer2 width={width}>

        <Surface width={width} height={Math.floor(width* 0.6) } >
          <Slideshow 
          
          to = {to}
          from ={from}
          progress={progress}/>
          </Surface>


        </Laer2>
        
        <laer1 ref={el=> (widthlaer = el)} className={s.laer1_grid}>
        <social className={s.social_grid} >
            <socialicons >
                <containericons>
<h1>Привет</h1>
                </containericons>
            </socialicons>
        </social>
        <content className={s.content_grid}>
            <h1>Открой для себя</h1>
        </content>
        <menubutton className={s.menubutton_grid}>
           
           <div> <buttons onClick={ nextimg2}>
            Зима
            </buttons>
            <buttons>
          Весна
            </buttons>
            <buttons>
          Лето
            </buttons>
            <buttons>
          Осень
            </buttons>
            </div>
        </menubutton>
        </laer1>
      
        
        
        </>
    )
}