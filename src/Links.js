import React from 'react';
import {links} from './javascriptarrays/link';
import styles from './navbar.module.css'; 

export default function Links(){


    return(
        <div className={styles.linkBox}>
            {links.map((link, index) => (
            <body className={styles.eachLink} key={index}>
                <a href="https://www.w3schools.com/html/html_links.asp" target="_blank" rel="noreferrer">{link}</a>
            </body>
        ))}
        </div>

    )
}

