import { useState } from 'react';
import { Link } from "react-router-dom";

import {useTheme} from '../contexts/useTheme';

function NavigationBar(props) {
  const { themeToggle, handleThemeToggle } = useTheme()
  
  return (
    <div className={`navbar ${themeToggle ? 'dark' : 'light'}`}>
      <div className="navbar-brand">
        <Link to="/">📲</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <button className="theme-toggler" onClick={handleThemeToggle}>
        Theme: { themeToggle ? '🌚' : '🌞' }
      </button>
    </div>
  );
}

export default NavigationBar;
