import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import DownloadIcon from "@mui/icons-material/Download";
import CV from "./cv.pdf";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CV_Version = "12.2022";

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Oleg Suvorov
          </Typography>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Senior Frontend Developer
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.secondary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.secondary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.secondary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container disableGutters component="main" sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ my: 3 }}>
              CV Senior Frontend Developer Oleg Suvorov {CV_Version}:
            </Typography>
            <Container
              sx={{
                p: 0,
                mb: 4,
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
              }}
            >
              <Document file={CV}>
                <Page pageNumber={1} />
              </Document>
            </Container>
            <Button
              startIcon={<DownloadIcon />}
              href={CV}
              component={Link}
              variant="contained"
              download={`CV Senior Frontend Developer Oleg Suvorov ${CV_Version}.pdf`}
            >
              Download CV
            </Button>
          </Grid>{" "}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ my: 3 }}>
              Demo test tasks:
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.primary.main}`,
          mt: 4,
          py: 4,
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://olegsuv.netlify.app/">
            olegsuv
          </Link>
          {" " + new Date().getFullYear() + "."}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
