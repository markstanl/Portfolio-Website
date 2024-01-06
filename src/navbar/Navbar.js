import React, {useEffect, useRef} from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from '../images/mslogo.png';
import MobileDropdown from './MobileDropdown';

function Navbar({ isMobile, windowHeight, windowWidth }) {

    let initialWindowHeight = useRef(windowHeight);

    const reduceImage = () => {
        return (windowHeight/12*2.467 > windowWidth/2.25)
        /* The logo is 269x109 px*/
        /* The logo is contant, size, at some points the hamburger overlaps the logo*/
    }

    console.log(isMobile ? 'styles.mobileNavbar' : 'styles.navbar');

    console.log(reduceImage());
    console.log(isMobile);


    return(
        <div className={isMobile ? styles.mobileNavbar  :styles.navbar} style={{height: `${initialWindowHeight*.14}px`}}>
            <img 
                className={reduceImage() ? styles.reducedLogo : styles.logo } 
                style={reduceImage() ? {width: '70vw', marginTop: `${80-windowWidth/70/2.467/2}`} : {height: isMobile ? '60px' : '12vh', marginTop: isMobile ? '10px' : '0'}}
                src={logo} 
                alt="MS" 
            />            
            {isMobile ? <MobileDropdown windowHeight={windowHeight}/> : <Jumpto windowHeight={windowHeight} windowWidth={windowWidth}/>}
        </div>
    )
}

export default Navbar;  