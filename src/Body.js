import React from 'react';
import styles from './body.module.css';
import Routes from './Routes';

export default function Body() {


    return(
        <div className={styles.background}>
            <Routes />
        </div>
    );
}