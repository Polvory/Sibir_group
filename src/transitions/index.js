import React from 'react';
// import Slideshow from "../pages/TestState"
// import TestState2 from "../pages/TestState"


import { Surface } from "gl-react-dom";


import img1 from "../img/1.png"
import img2 from "../img/2.png"
import img3 from "../img/3.png"
import img4 from "../img/4.png"






class TestState extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {index: 0} ;
        this.state.images = [img1, img2, img3, img4];
        this.state.from = this.state.images[0] ;
        this.state.to =this.state.images[1]  ;
      }
   
      tick() {
        this.setState(state => ({
          index: state.index + 0.1
        }));
     
      }
    
    
     

      nextimg = () => {
     


          let counter = 0;
          const intervalId = setInterval(() => {console.log('Hello World');
          this.tick();
          counter += 1;
        if (counter === 10) {
            console.log('Done');
            clearInterval(intervalId);
            this.state.index = 0;


            this.setState(state => ({
              from: state.from = this.state.images[1]},
              {to: state.to = this.state.images[2]


            }));

            console.log(this.state.from)
            console.log(this.state.to)

          }
        }, 100);

       
          //   const timerId =  setInterval(  
          //   () =>  this.tick(), 1000);
          // console.log(this.state.index)
        
        
        // clearTimeout(timerId);
      ///   this.tick()

          
      //  }
   
    console.log('значение this:', this.state.index)

    }

     
  

    render() {

       
      return (
        <>


<TestState2 />







        

    
     

        </>
      );
    }
  }
  export default TestState