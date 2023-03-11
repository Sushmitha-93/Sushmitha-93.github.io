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
import Box from "@mui/material/Box";
import { Button, Modal } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TimeLine = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);

  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
  };

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
          Here's a glimpse of my education, qualifications and previous
          experience
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

            <Typography variant="subtitle2">
              San Jose State University, San Jose, CA
            </Typography>

            <Typography variant="subtitle2" gutterBottom="true">
              GPA: 3.52 / 4
            </Typography>
            <Typography variant="subtitle1" gutterBottom="true">
              Course Work: Enterprise Application Development, Machine Learning,
              Data Mining, Software Systems Design, Enterprise Distributed
              Systems, Enterprise Software Platforms, Artificial Intelligence.
            </Typography>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="April 2019 - January 2022
            (2.75 years)"
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
              Production Planning & Scheduling full-stack application
              development for Australia based mining customer using Agile
              methodology.
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleOpen1}>
              View More
            </Button>
            <Modal
              open={open1}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Programmer Analyst at Cognizant
                </Typography>
                <Typography variant="subtitle2" gutterBottom="true">
                  April 2019 - January 2022
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Production Planning & Scheduling full-stack application
                  development for Australia based mining customer using Agile
                  methodology.
                  <div style={{ paddingTop: "10px" }}>
                    <i>
                      <b>Technologies:</b> Node.js, Express.js, React.js, MUI,
                      MongoDB (Studio3T), Kafka, Data Historian, LDAP, Github,
                      Jenkins, Jira
                    </i>
                  </div>
                  <ul>
                    <li>
                      Involved in complete software development lifecycle with
                      constant interaction with Client in an Agile workflow
                      environment.
                    </li>
                    <li>
                      Analyzed requirements & participated in user story
                      discussions, design, scrum meetings, sprint plannings with
                      Client and functional teams for delivering 2 most complex,
                      business critical features - Production forecast &
                      Production Actualization.
                    </li>
                    <li>
                      Implemented a dashboard using React.js and MUI to view
                      latest mining samples and manage laboratory data.
                    </li>
                    <li>
                      Built 20+ RESTful APIs using Express on Node.js
                      implementing business logic and integrate with SAP ERP and
                      other apps.
                    </li>
                    <li>
                      Deployed about 40+ code changes related to feature
                      additions, bug fixes & optimizations using Jenkins CI/CD,
                      GitHub & Docker
                    </li>
                    <li>
                      Wrote unit and integration tests and integrated them into
                      CI/CD pipeline to ensure software quality and reliability.
                    </li>
                    <li>
                      Provided regular KT sessions, performed code reviews,
                      troubleshooting, led and mentored group of junior
                      developers.
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Modal>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="August 2016 - Febuary 2017
            (2.3  years)"
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
              A Production & Logistics planning full stack application
              development for agro/food manufacturing company based in US.
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleOpen2}>
              View More
            </Button>
            <Modal
              open={open2}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Associate Software Developer at Accenture
                </Typography>
                <Typography variant="subtitle2" gutterBottom="true">
                  Mar 2017 – Apr 2019
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Production Planning & Logistics full-stack application
                  development for an agro/food manufacturing company based in
                  the US.
                  <div style={{ paddingTop: "10px" }}>
                    <i>
                      <b>Technologies:</b> Node.js, Express.js, React.js,
                      Bootstrap, MS SQL Server, GitLab, Jenkins, Jira
                    </i>
                  </div>
                  <ul>
                    <li>
                      Developed RESTful APIs & screens for Truck Load-out &
                      Load-in applications in integration with SAP ERP modules,
                      to automate goods movements and ensure real-time insights
                      for sales and logistics team, reducing month end reporting
                      efforts by 30%.
                    </li>
                    <li>
                      Implemented 25+ code changes involving feature expansions,
                      code refactoring, crucial optimizations for smoother
                      operations and user engagement, using Jenkins CI/CD
                      pipeline with automated builds and tests across Dev, QA,
                      Test and Prod envs.
                    </li>
                    <li>
                      Worked on complex production bugs across 15+ interfaces in
                      12 Production servers with excellent rapport with business
                      users.
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Modal>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            date="August 2016 - Febuary 2017
            (6 months)"
            dateClassName="timeLineDate"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography variant="h6" sx={{ height: "28px" }}>
              Web Developer Intern @ Blue Falcon Adventures
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Bengaluru, India
            </Typography>
            <Typography variant="subtitle1">
              Company portfolio and event booking application development for
              skydiving start-up.
            </Typography>
            <br />
            <Button variant="outlined" onClick={handleOpen3}>
              View More
            </Button>
            <Modal
              open={open3}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Web Developer Intern at Blue Falcon Adventures
                </Typography>
                <Typography variant="subtitle2" gutterBottom="true">
                  August 2016 - Febuary 2017
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <ul>
                    <li>
                      Designed, developed & deployed Portfolio and Event booking
                      application for a skydiving start-up company using
                      <i>
                        JavaScript, Bootstrap, HTML, CSS, jQuery, Zoho CRM,
                        Adobe Photoshop.
                      </i>
                    </li>
                    <li>
                      <a
                        href="https://dtsushmitha.wixsite.com/iloveskydiving"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Website Prototype
                      </a>{" "}
                      <OpenInNewIcon sx={{ fontSize: 15 }} />
                    </li>
                    <li>
                      Performed SEO optimization, Social Media management, and
                      email marketing. Designed posters using Adobe photoshop.
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Modal>
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
