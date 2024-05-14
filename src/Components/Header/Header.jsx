import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



import styles from '../Header/Header.module.scss'


const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.container}>

  <div className={styles.logo}>
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />    
          </div>
     <nav>
    <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Latest
          <ul>
            <li></li>
          </ul>
        </li>
        <li>Blog</li>
        <li>Pages</li>
        <li>Contact</li>
    </ul>
</nav>      
<div className={styles.menu}>
<FontAwesomeIcon icon={faBars}/> 
</div>
            <div className={styles.awasom}> 
            <FontAwesomeIcon icon={faHeart}/>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>


      </header>
 

    </div>
  );
};

export default Header;
