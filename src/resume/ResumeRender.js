import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import pdfURL from './Resume.pdf'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeRender({isMobile, windowWidth}) {

    console.log(2.17*windowWidth*-21.09);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: isMobile? `${windowWidth/5.5}vh` : '110vh',overflow: 'hidden', marginLeft: 'auto', marginRight: 'auto'}}>
            <Document file={pdfURL}>
                <Page pageNumber={1} scale={isMobile? windowWidth/700 : 1} />
            </Document>
        </div>
    );
};
