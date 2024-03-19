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
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);

  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
    setOpen3(false);
    setOpen4(false);
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
            className="vertical-timeline-element--work "
            date="June 2023 - January 2024"
            dateClassName="timeLineDate"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Typography variant="h6" sx={{ height: "28px" }}>
              Software Engineering Intern @ Adori Labs
            </Typography>
            <Typography variant="subtitle2" gutterBottom="true">
              Santa Clara, CA, USA
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
                  Software Engineering Intern at Adori Labs, Inc
                </Typography>
                <Typography variant="subtitle2" gutterBottom="true">
                  June 2023 - January 2024
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div style={{ paddingTop: "10px" }}>
                    <i>
                      <b>Technologies:</b> Python, FastAPI, React, JavaScript,
                      AWS [Lambda, S3, DynamoDB, SageMaker], GCP [GKE, OAuth],
                      MySQL.
                    </i>
                  </div>
                  <ul>
                    <li>
                      Developed a scalable AI Content Authentication app for
                      audio/video files leveraging Adori's patented watermarking
                      technology.
                    </li>
                    <li>
                      Implemented a “Serverless, Event-driven Distributed
                      Microservice” architecture with task splitting & parallel
                      processing using scalable AWS Lambdas, achieving 70%
                      faster encoding & handling 2x more larger files
                      cost-effectively. (Medium blog article)
                    </li>
                    <li>
                      Built dynamic UI using React with file upload/download,
                      progress bars & notification features ensuring a seamless
                      user experience.
                    </li>
                    <li>
                      Leveraged open-source Stable Diffusion LLM to implement
                      scalable APIs using FastAPI and AWS SageMaker to
                      facilitate image generation for Blog-to-Video service,
                      reducing reliance on OpenAI's DALL-E service and lowering
                      costs by 20%.
                    </li>
                    <li>
                      Developed robust user authentication microservice using
                      Google OAuth and JWT for secure identity management
                      delivering frictionless user journeys with seamless
                      sign-up, sign-in, password reset, and email verification
                      features using FastAPI & React.js.
                    </li>
                    <li>
                      Integrated Stripe payments with dynamic usage limit
                      upgrades via webhooks, adding monthly revenue by 25%.
                    </li>
                  </ul>
                </Typography>
              </Box>
            </Modal>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            date="Jan 2022 - Dec 2023"
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
              GPA: 3.67 / 4
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
                      <b>Technologies:</b> Node.js, TypeScript, GraphQL,
                      React.js, Redux, MongoDB, Redis, Apache Kafka, Jenkins,
                      AWS, Jest, Mocha.
                    </i>
                  </div>
                  <ul>
                    <li>
                      Played a pivotal role in success of a $7 million project,
                      migrating a “Sales & Production Planning” application from
                      a legacy packaged software to a distributed MERN stack
                      microservice architecture, for BHP – a major Mining client
                      based in US & Australia.
                    </li>
                    <li>
                      Engaged in Agile practices with active participation in
                      story discussions, sprint planning (bi-weekly), daily
                      stand-ups, backlog grooming.
                    </li>
                    <li>
                      Designed & deployed 100+ asynchronous REST & GraphQL
                      endpoints on NodeJS, streamlining business data between
                      frontend & a diverse back-end ecosystem encompassing
                      various databases, SAP ERP suite, messaging middlewares,
                      ensuring minimal latency.
                    </li>
                    <li>
                      Implemented interactive & dynamic dashboards using
                      React.js to query and visualize business data like
                      production forecasts, inventory levels, sales-to-plan
                      order ratios etc., facilitating effective quality
                      inspections and reducing manual reporting by 50%.
                    </li>
                    <li>
                      Reviewed code for 10+ developers, enforcing best
                      practices, design principles, security and rigorous
                      testing for bug-free releases.
                    </li>
                    <li>
                      Wrote robust unit & integration test cases using Jest &
                      Mocha, automated within CI/CD pipeline ensuring 95%+
                      feature coverage.
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
                      <b>Technologies:</b> Node.js, JavaScript, Express.js,
                      React.js, Bootstrap, MySQL, IBM MQ, Git, Jenkins.
                    </i>
                  </div>
                  <ul>
                    <li>
                      “Production Planning & Logistics” application development
                      for Cargill – a major Agro/food manufacturing client based
                      in US.
                    </li>
                    <li>
                      Modernized transport logistics web application with UI
                      revamp, and real-time insights via event-driven API
                      integration with SAP (TM,PP modules) & other business
                      systems, streamlining workflows, reducing 60% of manual
                      efforts.
                    </li>
                    <li>
                      Implemented 50+ critical code changes involving feature
                      expansions, code refactoring, optimizations for smoother
                      operations and user engagement, using Jenkins CI/CD
                      pipeline with automated builds and tests across Dev, QA,
                      Test and Prod environments.
                    </li>
                    <li>
                      Successfully stabilized the application features by
                      building and integrating robust test scripts which helped
                      in effectively identifying and addressing 95% critical
                      issues. Devised shell scripts and cron jobs to automate
                      various maintenance tasks.
                    </li>
                    <li>
                      Built strong relationships with business stake holders to
                      effectively resolve production bugs.
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
              Bangalore, India
            </Typography>

            <br />
            <Button variant="outlined" onClick={handleOpen4}>
              View More
            </Button>
            <Modal
              open={open4}
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
                Visvesvaraya Technological University, Bangalore, India
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
