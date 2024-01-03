import React from 'react';
import styles from './navbar.module.css'; 
import Links from './Links';

export default function Jumpto({windowHeight}){

    console.log(windowHeight);

    return (
        <div className={styles.links}>
                <Links windowHeight={windowHeight}/>
        </div>
    )
}

