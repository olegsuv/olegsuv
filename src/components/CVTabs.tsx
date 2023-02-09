import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { CV } from "./CV/CV";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const cv1description = (
  <>
    Perfectly fits for a 7-second check (average time of CV's view according to{" "}
    <a
      href="https://standout-cv.com/how-long-recruiters-spend-looking-at-cv"
      target="_blank"
      rel="noreferrer"
    >
      study
    </a>
    .
  </>
);

const cv2description = (
  <>
    Perfectly fits Applicant Tracking System (ATS) - the tool, used by most
    hiring managers to evaluate a candidate’s document.
  </>
);

const cv7description = (
  <>
    Scandinavian companies requested the extended version with the "most
    professional photo" inside. It contains all the information from my LinkedIn
    profile, including comprehensive project descriptions.
  </>
);

const CVs = [
  {
    pages: 1,
    description: cv1description,
  },
  { pages: 2, description: cv2description },
  { pages: 7, description: cv7description },
];

export default function CVTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {CVs.map((cv, index) => (
            <Tab
              label={`${cv.pages}-page${cv.pages > 1 ? "s" : ""} CV`}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {CVs.map((cv, index) => (
        <TabPanel value={value} index={index}>
          <CV fileLength={cv.pages} description={cv.description} />
        </TabPanel>
      ))}
    </>
  );
}
