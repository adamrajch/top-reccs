import Container from "@material-ui/core/Container";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { ReactElement } from "react";
interface Props {
  children: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      w: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      backgroundColor: "inherit",
      paddingTop: "16px",
      alignItems: "center",
    },
  })
);
export default function AppContainer({ children }: Props): ReactElement {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
}
