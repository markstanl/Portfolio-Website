import React from 'react';
import styles from './body.module.css';
import WebRoutes from './WebRoutes';

export default function Body() {
    let backgroundHeight = '4054px';

    if(window.location.pathname === '/'){
        backgroundHeight = '2100px';
    }
    else if(window.location.pathname === '/resume'){
        backgroundHeight = '100%';
    }
    else if(window.location.pathname === '/projects'){
        backgroundHeight = '4054px';
    }
    else if(window.location.pathname === '/about'){
        backgroundHeight = '4054px';
    }

    console.log(window.location.pathname);
    /* console log used with an extension to show me the pathname of the current page.*/
    
    return(
        <div className={styles.background} style={{height: backgroundHeight}}>
            <WebRoutes />
        </div>
    );
}