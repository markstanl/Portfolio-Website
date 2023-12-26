import React, {useEffect, useState} from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from './images/mslogo.png';
import {Dimensions} from 'react-native';

function Navbar(){

    const [windowWidth,setWindowHeight] = useState(Dimensions.get('window').width);

    useEffect(() => setWindowHeight(Dimensions.get('window').width), []);

    return(
        <div className={styles.navbar}>
            <img className={styles.logo} style={{height: windowWidth * 0.05}} src={logo} alt="MS" />
            <Jumpto />
        </div>
    )

}

export default Navbar;  