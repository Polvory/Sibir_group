import React from 'react';
import style from './logo.module.css'

export const Logo = (props) => {
    return <img className={style.img} src={props.url} />;
  }