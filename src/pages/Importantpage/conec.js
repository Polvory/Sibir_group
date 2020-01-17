import React from "react"
import s from './Importantpage.module.css'
import styled from 'styled-components';
import { Surface } from "gl-react-dom";
import GLTransition from "react-gl-transition";
import GLTransitions from "gl-transitions";
import { LinearCopy } from "gl-react";
import img1 from "../../img/1.png"
import img2 from "../../img/2.png"
import img3 from "../../img/3.png"
import img4 from "../../img/4.png"


const Laer2 = styled.div`
font-size: 1.5em;
position:fixed;
height: 100vh;
z-index:0;

width: ${props => props.width + "px"};
`;
const transition = GLTransitions[7];


// -------------------------------------------



class Conec extends React.Component {
    
    
    
    constructor(props) {
        super(props);
        this.state = { index: 0 };
        this.state.images = [img1, img2, img3, img4];
        this.state.from = this.state.images[0];
        this.state.to = this.state.images[1];
        this.state.xyi = 0;
    
      }

      tick() {
        this.setState(state => ({
          index: state.index + 0.1
        }));
    
      }
    
    
      Leto = () => {
        console.log("1");
        this.setState(state => ({ to: state.to = img4 }));
        this.nextimg2()
      }
    
    
      nazimy = () => {
        this.setState(state => ({ to: state.to = img1 }));
        this.nextimg2()
      }
    
      vesna = () => {
        this.setState(state => ({ to: state.to = img3 }));
        this.nextimg2()
      }
    
      osen = () => {
        this.setState(state => ({ to: state.to = img2 }));
        this.nextimg2()
        console.log()
      }
//   ------------------------------------------
nextimg2 =()=>{
     


    let counter = 0;
    const intervalId = setInterval(() => {
        
        
        console.log('Hello World');
    // setprogress(progress + 0.1)
    // console.log(progress)
    this.tick();
    counter += 1;
  if (counter === 10) {
      console.log('Done');
      clearInterval(intervalId);
    this.state.index = 0;

    this.setState(state => ({from: state.from = this.state.to}));
   
    
    //   console.log(this.state.from)
    //   console.log(this.state.to)
    //   console.log(Slideshow)


    }
  }, 100);

}


// ------------------------------
    render() {

       
              
        
        
        
//  ----------------------------------------------------------       
        return(

            <>
            <Laer2 >
    
              <Surface width={1040} height={Math.floor(1040 * 0.6)} >
                <Slideshow
    
                  to={this.state.to}
                  from={this.state.from}
                  progress={this.state.index} 
                  />
              </Surface>
    
    
            </Laer2>
    
            <laer1  className={s.laer1_grid}>
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
    
                <div> <buttons onClick={this.nazimy}>
                  Зима
        </buttons>
                  <buttons onClick={this.vesna}>
                    Весна
        </buttons>
                  <buttons onClick={this.osen}>
                    Лето
        </buttons>
                  <buttons onClick={this.Leto}>
                    Осень
        </buttons >
                </div>
              </menubutton>
            </laer1>
    
    
    
          </>

        )



    };

}

// --------------------------------------------------------


class Slideshow extends React.Component {
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







export default Conec