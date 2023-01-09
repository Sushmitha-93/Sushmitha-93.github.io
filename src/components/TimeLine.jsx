import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/timeLine.css";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import accentureLogo from "../images/Accenture-logo.png";
import cognizantLogo from "../images/Cognizant.png";
import { Box } from "@mui/system";

const TimeLine = () => {
  return (
    <section id="timeline">
      <Box sx={{ backgroundColor: "#E3E3E3", paddingBottom: "20px" }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            color: "#ff4081",
            fontSize: "34px",
            textTransform: "none",
            paddingTop: "60px",
          }}
        >
          Work Experience & Education
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ paddingBottom: "60px" }}
        >
          Here is glimpse of my education, qualifications and previous
          occupations
        </Typography>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            date="Jan 2022 - Dec 2023 (expected)"
            dateClassName="timeLineDate"
            contentStyle={{ background: "#3F704D", color: "#fff" }}
            contentArrowStyle={{ borderRight: "12px solid  brown" }}
            iconStyle={{ background: "#3F704D", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <Typography variant="h6" sx={{ height: "28px" }}>
              Master of Science in Software Engineering
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Master Degree
            </Typography>
            <Typography variant="subtitle1">
              San Jose State University, San Jose, CA
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="August 2016 - Febuary 2017"
            dateClassName="timeLineDate"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography variant="h6" sx={{ height: "28px" }}>
              Programmer Analyst @ Cognizant
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Bangalore, India
            </Typography>
            <Typography variant="subtitle1">
              B2B enterprise web application development and integration for one
              of the biggest mining company using implementing Industry 4.0.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="April 2019 - January 2022"
            dateClassName="timeLineDate"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography variant="h6" sx={{ height: "28px" }}>
              Associate Software Developer @ Accenture
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Bangalore, India
            </Typography>
            <Typography variant="subtitle1">
              B2B enterprise web application development and integration for an
              agro-food manufacturing company based in USA.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="August 2016 - Febuary 2017"
            dateClassName="timeLineDate"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography variant="h6" sx={{ height: "28px" }}>
              Web Designer Intern @ Blue Falcon Adventures
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Bengaluru, India
            </Typography>
            <Typography variant="subtitle1">
              User Experience, Visual Design
            </Typography>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2012 - 2016"
            dateClassName="timeLineDate"
            contentStyle={{ background: "#3F704D", color: "#fff" }}
            contentArrowStyle={{ borderRight: "12px solid  brown" }}
            iconStyle={{ background: "#3F704D", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <Link
              href="https://jssateb.ac.in/"
              sx={{ textDecoration: "none", color: "inherit" }}
              target="_blank"
              rel="noreferrer"
            >
              <Typography variant="h6" sx={{ height: "28px" }}>
                Bachelor of Engineering in Computer Science
              </Typography>
              <Typography variant="subtitle2" gutterBottom="true">
                Bachelor Degree
              </Typography>
              <Typography variant="subtitle1">
                JSS Academy of Technical Education, Bangalore, India
              </Typography>
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </Box>
    </section>
  );
};

export default TimeLine;
