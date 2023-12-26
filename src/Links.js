import React from 'react';
import {links} from './javascriptarrays/link';
import styles from './navbar.module.css'; 

export default function Links(){


    return(
        <div className={styles.linkBox}>
            {links.map((link, index) => (
            <body className={styles.eachLink} key={index}>
                <a href={link.link} target="_self" rel="noreferrer">{link.title}</a>
            </body>
        ))}
        </div>

    )
}

