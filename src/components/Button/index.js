import React from "react";
import Button from "@material-ui/core/Button";

const MYButton = ({onClick , title}) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {title}
    </Button>
  );
};

export default MYButton;
