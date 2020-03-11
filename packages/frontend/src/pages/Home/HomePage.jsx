import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { useStyles } from "./HomePageStyles";
import PhoneInput from "../../components/PhoneInput";

const SAVE_PHONENUMBER = gql`
  mutation savePhoneNumber($phonenumber: String!) {
    savePhoneNumber(phonenumber: $phonenumber) {
      phonenumber
    }
  }
`;

const HomePage = props => {
  const [savePhoneNumber, phonenumber] = useMutation(SAVE_PHONENUMBER);

  const [phone, setPhone] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const isValidPhone = value =>
    value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

  const onEnterPhone = phonenumber => setPhone(phonenumber);

  const submitPhone = async () => {
    console.log(`phone number: ${phone}`);
    console.log(typeof phone);
    // test phone number
    // ...
    // if valid submit to Apollo

    await savePhoneNumber({ variables: { phonenumber: phone } });
    setSubmitted(true);
  };

  const classes = useStyles();
  if (!submitted) {
    return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Box className={classes.logo}>
            <img src="https://via.placeholder.com/150" alt="some logo" />
          </Box>
          <Typography
            variant="h3"
            color="textPrimary"
            align="center"
            gutterBottom
          >
            Help [Group Name] win $5,000 for [Charity X]
          </Typography>
          <Typography variant="h5" align="center">
            Kick it with [Group Name] on our friend map!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="medium" variant="filled">
            <PhoneInput onEnterPhone={onEnterPhone} />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<CloudDownloadIcon />}
              onClick={submitPhone}
            >
              Download
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" align="center">
            We value your privacy and trust and promise to never, ever sell your
            data.
          </Typography>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Typography variant="h3" color="textPrimary" align="center" gutterBottom>
        Thank you for your submission!
      </Typography>
    );
  }
};

export default HomePage;
