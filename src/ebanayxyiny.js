import React, { useState, useRef, useEffect } from 'react'




export const Ebanayxyiny = ()=> {



    const [width, setwidth] = React.useStat;




    React.useEffect(()=>{


        const i_id = setInterval(()=>{
            setwidth(currwidth => currwidth+1)
        }, 100);
        return () => {
            clearInterval(i_id)
        }
    })
//   const  nextimg2 = () => {



//         let counter = 0;
//         const intervalId = setInterval(() => {
//           console.log('Hello World');
    
//         //   setwidth(width + 1);
//           counter += 1;
//           if (counter === 10) {
//             console.log('Done');
//             clearInterval(intervalId);
//             this.state.index = 0;
    
           
    
    
    
//           }
//         }, 100);
    
//       }


  


    
return(


    <>
    <div>
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />


        <h1 >{width} бля</h1>
    </div>
</>

    
)




  


}




//     const nextimg2 = () => {



//         let counter = 0;


//         const intervalId = setInterval(() => {

//             setfrom(from + 0.1)
//             console.log('Hello World');
//             console.log(from);
//             counter += 1;
//             if (counter === 10) {
//                 console.log('Done');
//                 clearInterval(intervalId);



//             }
//         }, 100);

//     }




//     return (


//     )


// }