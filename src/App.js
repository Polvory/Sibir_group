import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import s from './css/App.css'
// import {HomePage} from './pages/HomePage'
// import Importantpage from './pages/Importantpage/Importantpage'
import Conec from './pages/Importantpage/conec.js'

import {Navbar} from './components/navbar/Navbar'
import {PageStart} from './pages/PageStart/PageStart'

// import { Page3 } from './pages/Page3';



// import bootstrap from './css/bootstrap.module.css'



function App() {
  return (
<>

    <BrowserRouter>
 
      <div className="parent_div_grid">

    <header>
      <Navbar/>
      </header>
    <content>
    <Switch>
              <Route exact path={'/'} exact component={Conec}/>
              <Route path={'/Page2'} exact component={PageStart}/> 
              {/* <Route path={'/Page3'} exact component={Page3}/>  */}
    </Switch>
    </content>
    
    <footer >Подвал</footer>


    
    
       

      </div>

    </BrowserRouter>   
</>

  );
}

export default App;
{/* <button className={button_os ml-5" type="button">Заказать звонок</button> */}