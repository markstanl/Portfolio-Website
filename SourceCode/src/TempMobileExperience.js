import React from 'react';

export default function TempMobileExperience(){
    const boxStyle ={
        width: '85%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: '5%',
        marginLeft: '5%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '0', // added
        left: '0', // added
        right: '0', // added
        bottom: '0', // added
    }

    return(
        <>
            <div style={boxStyle}> 
                <h1>WE ARE NOT MOBILE FRIENDLY YET</h1>
                <h2> Please experience this website on a computer</h2>
            </div>
        </>
    );
}