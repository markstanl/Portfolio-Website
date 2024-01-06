import React, { useState, useEffect } from 'react';
import { links } from '../javascriptarrays/link';
import styles from './navbar.module.css'; 

export default function Links({windowHeight, windowWidth}) {
    
    const [fontSize, setFontSize] = useState(windowHeight < 1100 ? windowHeight*.14 : 40);

    useEffect(() => {
        const handleResize = () => {
            setFontSize(windowHeight < 1100 ? windowHeight*.14 : 40);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.linkBox}>
            {links.map((link, index) => (
                <body className={styles.eachLink} key={index}>
                    <a href={link.link} target="_self" rel="noopener noreferrer" style={{ fontSize: 40 }}>{link.title}</a>
                </body>
            ))}
        </div>
    );
};