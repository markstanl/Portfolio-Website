import React, {useState, useEffect} from 'react';
import styles from './navbar.module.css'; 
import Jumpto from './Jumpto';
import logo from '../images/mslogo.png';

function Navbar(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return(
        <div className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="MS" />
            <Jumpto windowWidth={windowWidth}/>
        </div>
    )

}

export default Navbar;  