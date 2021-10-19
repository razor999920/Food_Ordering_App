import React from "react";
import mealsImg from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = () => {
  return <React.Fragment>
      <header className={classes.header}>
          <h1>Meals</h1>
          <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={mealsImg} alt="A table full of amazing food"/>
      </div>
  </React.Fragment>;
};

export default Header;