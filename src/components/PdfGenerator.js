// import { Button } from "@mui/material";
// import blobStream from "blob-stream";
// import PDFDocument from "pdfkit";
// import React from "react";

// function PdfGenerator() {
//   const generatePdf = () => {
//     // Create a document
//     const doc = new PDFDocument();

//     // Pipe the PDF into a blob
//     const stream = doc.pipe(blobStream());

//     // Add your content here
//     doc.fontSize(25).text("Hello World!", 100, 100);

//     // Finalize PDF file
//     doc.end();

//     // Trigger the download when the PDF is finished streaming
//     stream.on("finish", function () {
//       // Create a blob URL
//       const url = stream.toBlobURL("application/pdf");
//       // Create a link element
//       const a = document.createElement("a");
//       // Set the download attribute
//       a.download = "example.pdf";
//       // Set the href to the blob URL
//       a.href = url;
//       // Append the link to the body
//       document.body.appendChild(a);
//       // Trigger the download
//       a.click();
//       // Clean up the link
//       document.body.removeChild(a);
//     });
//   };

//   return (
//     <>
//       <Button onClick={generatePdf}>Generate PDF</Button>
//     </>
//   );
// }

// export default PdfGenerator;


import blobStream from "blob-stream";
import html2canvas from "html2canvas";
import PDFDocument from "pdfkit";
import React from "react";

function PdfGenerator() {
  const generatePdf = () => {
    // Assume there's some HTML content you want to convert
    const contentElement = document.getElementById("content-to-convert");

    html2canvas(contentElement).then((canvas) => {
      // Create a document
      const doc = new PDFDocument();
      const stream = doc.pipe(blobStream());

      // Convert the canvas to a Data URL
      const imageUrl = canvas.toDataURL("image/png");

      // Add the image to the PDF
      doc.image(imageUrl, {
        fit: [500, 400],
        align: "center",
        valign: "center",
      });

      // Finalize the PDF file
      doc.end();

      stream.on("finish", function () {
        const url = stream.toBlobURL("application/pdf");
        const a = document.createElement("a");
        a.download = "html-content.pdf";
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    });
  };

  return (
    <div>
      <div id="content-to-convert">
        <h1>Hello World in HTML</h1>
        <p>
          This content is converted from HTML to an image and then added to a
          PDF.
        </p>
      </div>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
}

export default PdfGenerator;

