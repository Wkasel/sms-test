import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { useStyles } from "./PhoneInputStyles";
import { TextField } from "@material-ui/core";

const TextMaskCustom = props => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        "1",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
      keepCharPositions
    />
  );
};

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

const PhoneInput = ({ onEnterPhone }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: " (  )    -    ",
    numberformat: "1320"
  });

  const handleChange = name => event => {
    // handle masking
    setValues({
      ...values,
      [name]: event.target.value
    });
    // pass the values back up to our page element.

    onEnterPhone(event.target.value);
  };

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <InputLabel htmlFor="phone-number-input">Enter Phone Number</InputLabel>
        <FilledInput
          value={values.textmask}
          onChange={handleChange("textmask")}
          id="phone-number-input"
          inputComponent={TextMaskCustom}
          aria-describedby="Please Enter Your Phone Number"
          fullWidth
          required
        />
      </FormControl>
    </div>
  );
};

export default PhoneInput;
