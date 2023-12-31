import React from 'react';
import styles from './homepage/body.module.css';
import WebRoutes from './WebRoutes';
import {projectsText} from './projects/projectsText.js';

export default function Body() {
    let backgroundHeight = '4054px';

    if(window.location.pathname === '/'){
        backgroundHeight = '2100px';
    }
    else if(window.location.pathname === '/resume'){
        backgroundHeight = '100%';
    }
    else if(window.location.pathname === '/projects'){
        backgroundHeight = `${(projectsText.length+1) * 100+500}px`
        {/*  the *100 is for the height of each project, The +1 is for the header (as it is about 100px 
        in height), and the +500 is for the height of the dropdown. */}
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