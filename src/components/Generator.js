import React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { useStyles } from "./JSS";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import GeneratorButton from "components/components/generatorButton";


const Generator = () => {
  const [state, setState] = React.useState({
    checkedUpper: true,
    checkedLower: true,
    checkedNumber: true,
    checkedSymbol: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid>
        <Typography className={classes.title}>password generator</Typography>
        <div className={classes.genform}>
          <Typography className={classes.sub}></Typography>
          <Button>
            <FileCopyOutlinedIcon className={classes.icon} />
          </Button>
        </div>
        <div>
          <Typography className={classes.txt}>settings</Typography>
        </div>
        <div className={classes.genform}>
          <Typography className={classes.subsetting}>
            include uppercase
          </Typography>
          <FormGroup>
            <FormControlLabel
              className={classes.root}
              control={
                <GeneratorButton
                  checked={state.checkedUpper}
                  onChange={handleChange}
                  name="checkedUpper"
                />
              }
            />
          </FormGroup>
        </div>
        <div className={classes.genform}>
          <Typography className={classes.subsetting}>
            include lowercase
          </Typography>
          <FormGroup>
            <FormControlLabel
              className={classes.root}
              control={
                <GeneratorButton
                  checked={state.checkedLower}
                  onChange={handleChange}
                  name="checkedLower"
                />
              }
            />
          </FormGroup>
        </div>
        <div className={classes.genform}>
          <Typography className={classes.subsetting}>
            include numbers
          </Typography>
          <FormGroup>
            <FormControlLabel
              className={classes.root}
              control={
                <GeneratorButton
                  checked={state.checkedNumber}
                  onChange={handleChange}
                  name="checkedNumber"
                />
              }
            />
          </FormGroup>
        </div>
        <div className={classes.genform}>
          <Typography className={classes.subsetting}>
            include symbols
          </Typography>
          <FormGroup>
            <FormControlLabel
              className={classes.root}
              control={
                <GeneratorButton
                  checked={state.checkedSymbol}
                  onChange={handleChange}
                  name="checkedSymbol"
                />
              }
            />
          </FormGroup>
        </div>
        <Button className={classes.button}>generate password</Button>
      </Grid>
    </Container>
  );
};

export default Generator;
