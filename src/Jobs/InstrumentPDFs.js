import React, { useState } from "react";
/* import { Document, Page } from "react-pdf"; */
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import pdf from "./EuphFAQs.pdf";

//Instead of importing a PDF, do I import a list of the PDFs separated by instrument?
//And then connect that if the value of an option (in NavComponent) is selected, then the PDF is then changed to that?

function InstrumentPDFs() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={pdf}
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
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default InstrumentPDFs;
