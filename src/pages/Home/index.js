import * as React from "react";

import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import { AccountCircle, VideoCall, MoreVert } from "@material-ui/icons";

import blackLogo from "../../images/preto.png";

import NavBar from '../NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1, //to stay on drawer/navbar
  },
  grow: {
    flexGrow: 1, //to distance
  },
  icons: {
    paddingRight: theme.spacing(2), //8 * 2
  },
  logo: {
    height: 28,
    marginLeft: 10,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.icons}>
            <MenuIcon />
          </IconButton>
          <img src={blackLogo} alt="Logo Youtube" className={classes.logo} />
          <Box className={classes.grow} /> {/* to distance icons */}
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <Button
            size="large"
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircle />}
            style={{ fontWeight: "bold", fontSize: "0.95rem" }}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      
      <NavBar />
    </Box>
  );
}
