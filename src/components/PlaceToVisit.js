import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import places from "../static/Places";
import useWindowPosition from "../hook/useWindowPosition";

const useStyles = makeStyles((themes) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [themes.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard places={places[1]} checked={checked} />
      <ImageCard places={places[0]} checked={checked} />
    </div>
  );
}
