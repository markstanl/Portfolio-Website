import React from 'react';
import styles from './navbar.module.css'; 
import Links from './Links';

export default function Jumpto({windowWidth}){

    /* You know looking at this file later in the project, it doesn't seem very necessary*/

    return (
        <div className={styles.links}>
                <Links windowWidth={windowWidth}/>
        </div>
    )
}

