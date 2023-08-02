import { Button, Link, Pagination, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./CV.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const fileChangedDate = "08.2023";

export function CV({ fileLength, description }) {
  const [CVFile, setCVFile] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const CV_string = `CV Senior Frontend Developer Oleg Suvorov ${fileChangedDate} G${fileLength}.pdf`;
  const isPaginated = fileLength > 1;

  useEffect(() => {
    (async () => {
      try {
        const module = await import(`../../CVs/cv${fileLength}.pdf`);
        const fileUrl = module.default;
        setCVFile(fileUrl);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [fileLength]);

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setTotalPages(nextNumPages);
  };

  const onPageChange = (e, p) => {
    const prevY = window.scrollY;
    setPageNumber(p);
    setTimeout(() => {
      window.scroll(0, prevY);
    }, 100);
  };

  return CVFile ? (
    <>
      {description && <Typography sx={{ mb: 1 }}>{description}</Typography>}
      <Button
        startIcon={<DownloadIcon />}
        href={CVFile}
        component={Link}
        variant="contained"
        download={CV_string}
        sx={{
          mb: 2,
          textTransform: "none",
        }}
      >
        Download "{CV_string}"
      </Button>
      <Document file={CVFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} size="A4" />
      </Document>
      {isPaginated && !!totalPages && (
        <Stack alignItems="center" sx={{ mt: 2 }}>
          <Pagination
            color="primary"
            onChange={onPageChange}
            count={totalPages}
            showFirstButton
            showLastButton
          />
        </Stack>
      )}
    </>
  ) : (
    <>Loading...</>
  );
}
