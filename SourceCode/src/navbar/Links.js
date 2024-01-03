import React, { useState, useEffect } from 'react';
import { links } from '../javascriptarrays/link';
import styles from './navbar.module.css'; 

export default function Links() {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [fontSize, setFontSize] = useState(window.innerHeight/ 20);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight);
            setFontSize(window.innerHeight/ 20);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log(fontSize);

    return (
        <div className={styles.linkBox}>
            {links.map((link, index) => (
                <body className={styles.eachLink} key={index}>
                    <a href={link.link} target="_self" rel="noopener noreferrer" style={{ fontSize: fontSize }}>{link.title}</a>
                </body>
            ))}
        </div>
    )
}
