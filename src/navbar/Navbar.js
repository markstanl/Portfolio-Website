import React from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from '../images/mslogo.png';
import MobileDropdown from './MobileDropdown';

function Navbar({ isMobile, windowHeight }) { // Destructure isMobile from props

    console.log(windowHeight);
    console.log(windowHeight);

    return(
        <div className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="MS" />
            {isMobile ? <MobileDropdown windowHeight={windowHeight}/> : <Jumpto windowHeight={windowHeight}/>}
        </div>
    )
}

export default Navbar;  