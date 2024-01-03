import React, { useState, useEffect } from 'react';
import { links } from '../javascriptarrays/link';
import styles from './navbar.module.css'; 

export default function Links({windowHeight}) {
    
    const [fontSize, setFontSize] = useState(window.innerHeight / 20);

    useEffect(() => {
        const handleResize = () => {
            if (typeof windowHeight === 'number') {
                setFontSize(windowHeight / 20);
            }
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [windowHeight]);

    return (
        <div className={styles.linkBox}>
            {links.map((link, index) => (
                <body className={styles.eachLink} key={index}>
                    <a href={link.link} target="_self" rel="noopener noreferrer" style={{ fontSize: fontSize }}>{link.title}</a>
                </body>
            ))}
        </div>
    );
};