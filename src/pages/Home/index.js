import * as React from "react";

import {
  makeStyles,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Switch,
  Typography,
  Menu,
  Divider,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import { AccountCircle, VideoCall, MoreVert } from "@material-ui/icons";

import blackLogo from "../../images/preto.png";
import whiteLogo from "../../images/branco.png";

import NavBar from "../NavBar";
import ContentVideos from "../ContentVideos";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: theme.palette.background.dark,
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

export default function Home({ darkTheme, setDarkTheme }) {
  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.icons}>
            <MenuIcon />
          </IconButton>
          <img
            src={theme.palette.type === "dark" ? whiteLogo : blackLogo}
            alt="Logo Youtube"
            className={classes.logo}
          />
          <Box className={classes.grow} /> {/* to distance icons */}
          <IconButton className={classes.icons}>
            <VideoCall style={{ fontSize: 28 }} />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon style={{ fontSize: 28 }} />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert
              style={{ fontSize: 28 }}
              onClick={handleClick}
              aria-controls="long-menu"
              aria-haspopup="true"
            />
          </IconButton>
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircle style={{ fontSize: 30 }} />}
            style={{ fontWeight: "bold", fontSize: "0.95rem" }}
          >
            Fazer Login
          </Button>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                width: "300px",
                height: "200px",
                marginTop: "50px"
              },
            }}
          >
            <Box>
              <Typography align="center" style={{ fontWeight: 600, fontSize: 18 }}>Tema escuro</Typography>
              <Divider />
              <Typography align="center" variant="body1">
                O Tema escuro escurece as partes claras da página para otimizar
                a experiência noturna. Confira! A configuração do Tema escuro
                será aplicada somente a este navegador.
              </Typography>
            </Box>
            <Box textAlign="end">
              <Switch
                value={darkTheme}
                onChange={() => setDarkTheme(!darkTheme)}
              />
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box display="flex" p={6} ml={3}>
        <NavBar />
        <ContentVideos />
      </Box>
    </Box>
  );
}
