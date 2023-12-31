import React, {useState, useEffect} from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from '../images/mslogo.png';
import MobileDropdown from './MobileDropdown';

function Navbar({ isMobile }) { // Destructure isMobile from props

    console.log(isMobile);

    return(
        <div className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="MS" />
            {isMobile ? <MobileDropdown /> : <Jumpto />}
        </div>
    )
}

export default Navbar;  