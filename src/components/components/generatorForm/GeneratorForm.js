import React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import GeneratorButton from "components/components/generatorButton";
import { useStyles } from "../../JSS";

const GeneratorForm = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.genform}>
      <Typography className={classes.subsetting}>{props.title}</Typography>
      <FormGroup>
        <FormControlLabel
          className={classes.root}
          control={
            <GeneratorButton
              checked={props.case}
              onChange={props.onChange}
              name={props.name}
            />
          }
        />
      </FormGroup>
    </div>
  );
};

export default GeneratorForm;
