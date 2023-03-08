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
              A Production Planning & Scheduling full stack application
              development (MERN) for an Australian based mining customer.
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
                  <ul>
                    <li>
                      Developed critical application features of Production
                      forecast, Actualization and Lab viewer modules of
                      Production Planning & Scheduling full-stack application
                      for an Australian-based mining customer using{" "}
                      <i>
                        Node.js, Express.js, React.js, MUI, MongoDB (Studio3T),
                        Kafka, Data Historian, Github, Jenkins, and Postman.
                      </i>
                    </li>
                    <li>
                      Involved in complete software development life cycle.
                      Participated in user story discussions, application
                      design, sprint plannings, daily stand-ups, code reviews,
                      and retrospectives in a fast-paced Agile development
                      environment.
                    </li>
                    <li>
                      Performed frequent deployments using Jenkins CI/CD,
                      GitHub, Docker with automated code movements, build &
                      test.
                    </li>
                    <li>
                      Wrote unit and integration tests for features and
                      integrated them into CI/CD pipeline to ensure quality and
                      reliability.
                    </li>
                    <li>
                      Worked on hotfixes, complex production bugs,
                      documentation, and maintenance. Led and mentored new
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
                  <ul>
                    <li>
                      Worked on Production & Transport planning full-stack
                      application for an agro/food manufacturing company based
                      in the US using{" "}
                      <i>
                        Node.js, React.js, JavaScript, MS SQL Server, XML, XSLT,
                        XSD, GitLab, Jenkins
                      </i>{" "}
                      in an Agile team.
                    </li>
                    <li>
                      Developed backend & front end of Truck Load-out & Load-in
                      module, ensuring more real-time insights to sales team.
                    </li>
                    <li>
                      Also implemented & deployed 50+ high-risk code changes
                      involving feature expansions, code refactoring, crucial
                      optimizations for smoother operations and user engagement,
                      using automated Jenkins CI/CD pipeline.
                    </li>
                    <li>
                      Wrote unit and integration tests for features and
                      integrated them into CI/CD pipeline to ensure quality and
                      reliability.
                    </li>
                    <li>
                      Worked on complex production bugs and general application
                      maintenance across 40+ interfaces in 10 Prod servers.
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
                      Developed a portfolio and event booking application for a
                      skydiving start-up company using{" "}
                      <i>
                        JavaScript, Bootstrap, HTML, CSS, jQuery, Zoho CRM, and
                        Adobe Photoshop.
                      </i>
                    </li>
                    <li>
                      Designed, developed & deployed the company portfolio
                      website to provide event details & accept bookings.
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
