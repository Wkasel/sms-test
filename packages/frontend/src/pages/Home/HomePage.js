import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./HomePageStyles";

const HomePage = props => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
      <Link href="https://material-ui.com/getting-started/templates/">
        templates
      </Link>{" "}
      on the Material-UI documentation.
    </Typography>
  );
};

export default HomePage;
