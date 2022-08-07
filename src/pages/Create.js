import React from "react";
import { Typography, Button, Container } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const styles = {
  title: {
    textDecoration: "underline",
    marginBottom: "20px",
  },
};

export default function Create() {
  return (
    <Container maxWidth="xl">
      {/* styiling is like h6 but the element is h2 */}
      <Typography
        
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Click Me!
      </Button>
    </Container>
  );
}
