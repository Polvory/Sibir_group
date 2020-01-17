import React from 'react'
import {NavLink} from 'react-router-dom'
import {Logo} from '../logo/logo.js'
import icon from '../../img/logo.png'
import style from './Navbar.css'
import {ButtonLink} from './buttonlink/ButtonLink.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'


const NavLinkStyle = {
    textDecoration: 'none'
}

export const Navbar = () => (

    <nav className="nav_color_dark_grid">
       <NavLink  className={NavLinkStyle}
        to ="/">
  <Logo url={icon} />
  </NavLink>
  <div className="nav_menu_links">
  <NavLink  className={NavLinkStyle}
    to ="/"
    >
       <ButtonLink text={<FontAwesomeIcon icon={faHome} />} />  
    </NavLink>
   
  
  
    <NavLink className={NavLinkStyle}  
    to ="/Page2"
    >
       <ButtonLink text='О нас' />  
    </NavLink>
   

   
    <NavLink  className={NavLinkStyle}
    to ="/Page3"
    >
       <ButtonLink text='Страница 3' />  
    </NavLink>

    <ButtonLink text='Заказать звонок' /> 

  </div>

      
  </nav>






)