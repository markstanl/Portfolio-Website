import React, {useState, useEffect} from 'react';
import styles from './mobilenavbar.module.css';
import { Cross as Hamburger } from 'hamburger-react';
import MobileLinks from './MobileLinks';

export default function MobileDropdown({windowHeight}) {
    const [isOpen, setOpen] = useState(false);
    const [hamburgerSize, setHamburgerSize] = useState(windowHeight < 425 ? windowHeight/2.5 : 400);

    console.log(windowHeight);

    useEffect(() => {
        function handleResize() {
            const newWindowHeight = window.innerHeight;
            if (newWindowHeight < 425) {
                setHamburgerSize(newWindowHeight * 0.10);
            } else {
                setHamburgerSize(400);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const marginDet = () => {
        if(windowHeight < 320) {
            return '0.8vh';
        }
        else if (windowHeight < 400) {
            return '1.3vh';
        } else if (windowHeight < 445) {
            return '2vh';
        } else if (windowHeight < 525) {
            return '3.2vh';
        }
        else {
            return '4vh';
        }
    }

    return(
        <>
            <div className={styles.buttonHolder} style={{marginTop: marginDet()}}>
                <Hamburger label="Show menu" thickness={3} rounded toggled={isOpen} toggle={setOpen} size={hamburgerSize} color="#212131"/>
            </div>
            <div className={styles.barrier}></div>
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open : ''}`}>
                <MobileLinks />
            </div>
        </>
    );
}