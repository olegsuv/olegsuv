import { Button, Link, Pagination, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React, { ReactElement, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./CV.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  fileLength: number;
  description?: ReactElement;
}

export function CV({ fileLength, description }: Props) {
  const [CVFile, setCVFile] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const CV_string = `CV Senior_Lead React Frontend Developer Oleh Suvorov 05.2025.pdf`;
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

  const onPageChange = (_, p) => {
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
        <Page pageNumber={pageNumber} width={595} />
      </Document>
      {isPaginated && !!totalPages && (
        <Stack alignItems="center" sx={{ mt: 2 }}>
          <Pagination
            color="primary"
            onChange={onPageChange}
            count={totalPages}
          />
        </Stack>
      )}
    </>
  ) : (
    <>Loading...</>
  );
}
