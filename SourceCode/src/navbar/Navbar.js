import React from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from '../images/mslogo.png';

function Navbar(){

    return(
        <div className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="MS" />
            <Jumpto />
        </div>
    )

}

export default Navbar;  