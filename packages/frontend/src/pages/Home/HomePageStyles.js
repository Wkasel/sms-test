import { makeStyles } from "@material-ui/core/styles";
// import mapBG from "../../theme/img/map-bg.jpg";

export const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(6)
  },
  button: {
    margin: theme.spacing(1)
  },
  logo: {
    textAlign: "center",
    "& img": {
      marginRight: "auto",
      marginLeft: "auto"
    }
  }
}));

// export default useStyles;
