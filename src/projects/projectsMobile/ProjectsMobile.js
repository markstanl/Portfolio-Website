import React from 'react';
import styles from './projectsMobile.module.css';
import ProjectsIndividualMobile from './ProjectsIndividualMobile';

export default function ProjectsMobile({isMobile}) {

    return(
        <>
            <div className={styles.invisibleBarrier}></div>
            <div className={styles.outerBox}>
                <div className={styles.innerBoxBarrier}></div>
                <ProjectsIndividualMobile />
                <div className={styles.innerBoxBarrier}></div>
            </div>
        </>
    );
}