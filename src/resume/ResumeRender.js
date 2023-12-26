import React from 'react';
import { Document, Page } from 'react-pdf';
import pdfURL from './Resume.pdf'; // This is the path to your PDF file

const ResumeRender = () => {
    return (
        <div>
            <Document file={pdfURL}>
                <Page pageNumber={1} />
            </Document>
        </div>
    );
};

export default ResumeRender;