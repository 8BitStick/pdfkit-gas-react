import { Button } from "@mui/material";
import blobStream from "blob-stream";
import PDFDocument from "pdfkit";
import React from "react";

function PdfGenerator() {
  const generatePdf = () => {
    // Create a document
    const doc = new PDFDocument();

    // Pipe the PDF into a blob
    const stream = doc.pipe(blobStream());

    // Add your content here
    doc.fontSize(25).text("Hello World!", 100, 100);

    // Finalize PDF file
    doc.end();

    // Trigger the download when the PDF is finished streaming
    stream.on("finish", function () {
      // Create a blob URL
      const url = stream.toBlobURL("application/pdf");
      // Create a link element
      const a = document.createElement("a");
      // Set the download attribute
      a.download = "example.pdf";
      // Set the href to the blob URL
      a.href = url;
      // Append the link to the body
      document.body.appendChild(a);
      // Trigger the download
      a.click();
      // Clean up the link
      document.body.removeChild(a);
    });
  };

  return (
    <>
    <h5>hello pdf</h5>
      <Button onClick={generatePdf}>Generate PDF</Button>
    </>
  );
}

export default PdfGenerator;
