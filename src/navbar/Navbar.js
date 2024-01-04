import React, {useEffect, useRef} from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from '../images/mslogo.png';
import MobileDropdown from './MobileDropdown';

function Navbar({ isMobile, windowHeight, windowWidth }) {

    const reduceImage = () => {
        return (windowHeight/12*2.467 > windowWidth/2.25)
        /* The logo is 269x109 px*/
        /* Because the navbar logo css file is purely determined by the height of the window, theoretically the window
        can be super long and thin. So we need to check for this*/
    }

    console.log(windowWidth/2);

    console.log(reduceImage());

    return(
        <div className={reduceImage() ? styles.navbarReduced :styles.navbar}>
            <img className={reduceImage() ? styles.reducedLogo : styles.logo } style={reduceImage() ? {width: '50vw'} : {height: '12vh'}} src={logo} alt="MS" />
            {isMobile ? <MobileDropdown windowHeight={windowHeight}/> : <Jumpto windowHeight={windowHeight}/>}
        </div>
    )
}

export default Navbar;  