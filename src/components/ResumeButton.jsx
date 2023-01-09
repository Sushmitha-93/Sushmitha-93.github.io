import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeButton = () => {
  return (
    <>
      <Typography
        variant="h6"
        display="block"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: 500,
          fontSize: "1.1em",
          letterSpacing: "0.05em",
        }}
      >
        LOOKING FOR MY RESUME?
      </Typography>
      <Box>
        <Button
          variant="outlined"
          href="https://drive.google.com/file/d/1L9vxGXGO28qp0RDDAb8WPfBEEbG73tVk/view"
          target="_blank"
          rel="noreferrer"
          sx={{ display: "flex", borderRadius: 0 }}
        >
          <FaDownload /> &nbsp;&nbsp;&nbsp;VIEW RESUME
        </Button>
      </Box>
    </>
  );
};

export default ResumeButton;
