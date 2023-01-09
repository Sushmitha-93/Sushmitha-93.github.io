import React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FaReact, FaJava } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";
import {
  SiJavascript,
  SiPython,
  SiApachecordova,
  SiGraphql,
} from "react-icons/si";

const theme = {
  java: {
    style: {
      background: "#ED6C00",
      color: "#fff",
    },
    className: "vertical-timeline-element--laravel",
    icon: <FaJava size="40%" />,
  },
  python: {
    style: {
      background: "#3A76A6",
      color: "#fff",
    },
    className: "vertical-timeline-element--php",
    icon: <SiPython size="40%" />,
  },
  reactColor: {
    style: {
      background: "#61DAFB",
      color: "#fff",
    },
    className: "vertical-timeline-element--react",
    icon: <FaReact size="40%" />,
  },
  graphql: {
    style: {
      background: "#E535AB",
      color: "#fff",
    },
    className: "vertical-timeline-element--ruby",
    icon: <SiGraphql size="40%" />,
  },

  javascriptColor: {
    style: {
      background: "#F0DB4F",
      color: "#fff",
    },
    className: "vertical-timeline-element--javascript",
    icon: <SiJavascript size="40%" />,
  },
  dockerColor: {
    style: {
      background: "#019bc6",
      color: "#fff",
    },
    className: "vertical-timeline-element--docker",
    icon: <GrDocker size="40%" />,
  },
  cordovaColor: {
    style: {
      background: "#4CC2E4",
      color: "#fff",
    },
    className: "vertical-timeline-element--cordova",
    icon: <SiApachecordova />,
  },

  othersColor: {
    style: {
      background: "#019bc6",
      color: "#fff",
    },
    className: "vertical-timeline-element--others",
    icon: <MoreHorizIcon size="40%" />,
  },
};

export default theme;
