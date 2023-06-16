import React from "react";
import { useCreateJobStyles } from "../css/createJobStyles";

const CreateJob = () => {
  const { classes } = useCreateJobStyles();
  return <div className={classes.container}></div>;
};

export default CreateJob;
