import React, { useState } from "react";
/* import { Document, Page } from "react-pdf"; */
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf1 from "./AMPA Materials/9B/9B EXAMPLE QPP.pdf";
/* import pdf2 from "./AMPA Materials/9B/9B Text.pdf";
import pdf3 from "./AMPA Materials/9B/Part 2 AMPA 9B.pdf"; */

//Instead of importing a PDF, do I import a list of the PDFs separated by instrument?
//And then connect that if the value of an option (in NavComponent) is selected, then the PDF is then changed to that?

const InstrumentPDFs = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div className="PDF-Options">
        <div id="singlePDF-option">PDF 1</div>
        <div id="singlePDF-option">PDF 2</div>
        <div id="singlePDF-option">PDF 3</div>
      </div>
      <Document
        file={pdf1}
        onLoadSuccess={({ numPages }) =>
          setNumPages(numPages) && onDocumentLoadSuccess({ numPages })
        }
      >
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((pageNumber) => (
            <Page pageNumber={pageNumber} />
          ))}
      </Document>
      {/*     <p>
        Page {pageNumber} of {numPages}
      </p> */}
    </div>
  );
};
export default InstrumentPDFs;
