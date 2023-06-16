import React from "react";
import { useSideBarStyles } from "../css/sideBarStyles";
import { Button } from "@mantine/core";
const SideBar = () => {
  const { classes } = useSideBarStyles();
  return (
    <div className={classes.sideBar}>
      <button className={classes.btn}>
        Create a job
      </button>
    </div>
  );
};

export default SideBar;
