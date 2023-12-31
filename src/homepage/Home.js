import React from 'react';
import FirstHomeBody from './FirstHomeBody';
import SecondHomeBody from './SecondHomeBody';
import ThirdHomeBody from './ThirdHomeBody';
import MobileHome from './mobileHomePage/MobileHome';

export default function Home({isMobile, windowWidth}){
    return(
        <>
        {!isMobile ?
            <>
                <FirstHomeBody />
                <SecondHomeBody />
                <ThirdHomeBody windowWidth={windowWidth}/>
            </> :
            <MobileHome />
        }
        </>
    )
}