import { Button, Link } from "@mui/material";
import CVFile from "./cv.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function CV() {
  const CV_Version = "01.2023";
  const CV_string = `CV Senior Frontend Developer Oleg Suvorov ${CV_Version}.pdf`;

  return (
    <>
      <Button
        startIcon={<DownloadIcon />}
        href={CVFile}
        component={Link}
        variant="contained"
        download={CV_string}
        sx={{
          mb: 2,
        }}
      >
        Download "{CV_string}"
      </Button>
      <Document file={CVFile}>
        <Page pageNumber={1} size="A4" />
      </Document>
    </>
  );
}
