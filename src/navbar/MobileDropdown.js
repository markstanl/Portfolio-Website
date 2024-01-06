import React, {useState, useEffect} from 'react';
import styles from './mobilenavbar.module.css';
import { Twirl as Hamburger } from 'hamburger-react';
import MobileLinks from './MobileLinks';

export default function MobileDropdown({windowHeight}) {
    const [isOpen, setOpen] = useState(false);

    return(
        <>
            <div className={styles.buttonHolder} style={{marginTop: '0'}}>
                <Hamburger label="Show menu" thickness={3} rounded toggled={isOpen} toggle={setOpen} size={100} color="#FFFFFF"/>
            </div>
            <div className={styles.barrier}></div>
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open : ''}`}>
                <MobileLinks />
            </div>
        </>
    );
}