import React, { useState } from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";
import { useStyles } from "./JSS";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "components/components/charactors";
import GeneratorForm from "components/components/generatorForm";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const Generator = () => {
  const [password, setPassword] = useState("");

  const [state, setState] = React.useState({
    checkedUpper: false,
    checkedLower: false,
    checkedNumber: false,
    checkedSymbol: false,
  });

  const handleGeneratePassword = (e) => {
    if (
      !state.checkedUpper &&
      !state.checkedLower &&
      !state.checkedNumber &&
      !state.checkedSymbol
    ) {
      alert("You must Select atleast one option");
    }
    let list = "";
    if (state.checkedUpper) {
      list = list + upperCaseLetters;
    }
    if (state.checkedLower) {
      list = list + lowerCaseLetters;
    }
    if (state.checkedNumber) {
      list = list + numbers;
    }
    if (state.checkedSymbol) {
      list = list + specialCharacters;
    }
    setPassword(createPassword(list));
  };
  const createPassword = (list) => {
    let password = "";
    const characterLisrLenght = list.length;

    for (let i = 0; i < 10; i++) {
      const index = Math.round(Math.random() * characterLisrLenght);
      password = password + list.charAt(index);
    }
    return password;
  };

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea");
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand("copy");
    newTextArea.remove();
  };

  const handleCopyPassword = (e) => {
    copyToClipboard();
    alert("Copied");
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid>
        <Typography className={classes.title}>password generator</Typography>
        <div className={classes.genform}>
          <Typography className={classes.sub}>{password}</Typography>
          <Button>
            <FileCopyOutlinedIcon
              onClick={handleCopyPassword}
              className={classes.icon}
            />
          </Button>
        </div>
        <div>
          <div>
            <Typography className={classes.txt}>length 10</Typography>
            <Typography className={classes.txt}>settings</Typography>
          </div>
        </div>
        <GeneratorForm
          title="include uppercase"
          case={state.checkedUpper}
          onChange={handleChange}
          name="checkedUpper"
        />
        <GeneratorForm
          title="include lowercase"
          case={state.checkedLower}
          onChange={handleChange}
          name="checkedLower"
        />
        <GeneratorForm
          title="include numbers"
          case={state.checkedNumber}
          onChange={handleChange}
          name="checkedNumber"
        />
        <GeneratorForm
          title="include Symbol"
          case={state.checkedSymbol}
          onChange={handleChange}
          name="checkedSymbol"
        />
        <Button onClick={handleGeneratePassword} className={classes.button}>
          generate password
        </Button>
      </Grid>
    </Container>
  );
};

export default Generator;
