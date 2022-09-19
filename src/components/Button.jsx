import React from "react";
import { Button as Btn } from "@mui/material";

const Button = (props) => {
  return (
    <Btn
      onClick={props.submit}
      sx={{ ...props.style }}
      variant="contained"
      disableElevation
    >
      {props.text}
    </Btn>
  );
};

export default Button;
