import React from 'react';
import { links } from '../javascriptarrays/link.js';
import styles from './mobilenavbar.module.css';

export default function MobileLinks() {

    const style ={
        color: 'white',
    }

    return(
        <div className={styles.linkBox}>
            {links.map((link, index) => (
                <body className={styles.eachLink} key={index}>
                    <a href={link.link} target="_self" rel="noopener noreferrer" style={style}>{link.title}</a>
                </body>
            ))}
        </div>
    );
}