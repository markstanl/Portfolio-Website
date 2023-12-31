import React from 'react';
import styles from './mobilenavbar.module.css';
import { Cross as Hamburger } from 'hamburger-react';
import MobileLinks from './MobileLinks';

export default function MobileDropdown() {
    const [isOpen, setOpen] = React.useState(false);

    return(
        <>
            <div className={styles.buttonHolder}>
                <Hamburger label="Show menu" thickness={3} rounded toggled={isOpen} toggle={setOpen} size={400} color="#212131"/>
            </div>
            <div className={styles.barrier}></div>
            <div className={`${styles.mobileDropdown} ${isOpen ? styles.open : ''}`}>
                <MobileLinks />
            </div>
        </>
    );
}