import * as React from "react";

import {
  Box,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  ListItemText,
  Drawer,
  Divider,
  Typography,
  Toolbar,
} from "@material-ui/core";

import {
  Home as HomeIcon,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  AccountCircle,
  MusicNoteSharp,
  SportsSoccerSharp,
  SportsEsportsSharp,
  MovieSharp,
  ReceiptSharp,
  RssFeedSharp,
  EmojiObjectsSharp,
  VideocamSharp,
  AutorenewSharp,
  AddCircleOutlineSharp,
  Settings,
  Flag,
  HelpOutlineSharp,
  SmsFailedSharp,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  icons: {
    paddingRight: theme.spacing(2), //8 * 2
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "270px",
    borderRight: "none",
  },
  drawerContainer: {
    overflow: "auto",
  },
  listItemText: {
    fontSize: 14,
    color: "#030303",
    fontWeight: 500,
  },
  subHeader: {
    textTransform: "uppercase",
    position: "relative",
  },
  textInformation: {
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  boxInformation: {
    width: "214px",
    textAlign: "start",
    margin: "20px auto",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <Box className={classes.drawerContainer}>
        <List>
          {["Início", "Em alta", "Inscrições"].map((text, index) => (
            <ListItem
              button
              key={text}
              classes={{
                //here I define a class to directly change the style of a component, according to the material ui. (component >> api >> css)
                primary: classes.listItemText,
              }}
            >
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <Whatshot />}
                {index === 2 && <Subscriptions />}

                {index === 3 && <VideoLibrary />}
                {index === 4 && <AutorenewSharp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        {["Biblioteca", "Histórico"].map((text, index) => (
          <ListItem
            button
            key={text}
            classes={{
              primary: classes.listItemText,
            }}
          >
            <ListItemIcon>
              {index === 0 && <VideoLibrary />}
              {index === 1 && <AutorenewSharp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        <Divider />

        <Box p={4}>
          <Typography>
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Button
            style={{ marginTop: 10, fontWeight: "bold" }}
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircle style={{ fontSize: 30 }} />}
          >
            Fazer Login
          </Button>
        </Box>

        <Divider />

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subHeader}
            >
              O Melhor do youtube
            </ListSubheader>
          }
        >
          {[
            "Música",
            "Esporte",
            "Jogos",
            "Filmes",
            "Notícias",
            "Ao vivo",
            "Aprender",
            "Vídeos do momento",
            "Vídeo em 360º",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <MusicNoteSharp />}
                {index === 1 && <SportsSoccerSharp />}
                {index === 2 && <SportsEsportsSharp />}
                {index === 3 && <MovieSharp />}
                {index === 4 && <ReceiptSharp />}
                {index === 5 && <RssFeedSharp />}
                {index === 6 && <EmojiObjectsSharp />}
                {index === 7 && <VideocamSharp />}
                {index === 8 && <AutorenewSharp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <AddCircleOutlineSharp />
          </ListItemIcon>
          <ListItemText
            primary={"Procurar canais"}
            classes={{
              primary: classes.listItemText,
            }}
          />
        </ListItem>

        <Divider />

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subHeader}
            >
              Mais do Youtube
            </ListSubheader>
          }
        >
          {["Youtube Premium", "Ao vivo"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <VideocamSharp /> : <AutorenewSharp />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        {[
          "Configurações",
          "Histórico de denúncias",
          "Ajuda",
          "Enviar feedback",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <Settings />}
              {index === 1 && <Flag />}
              {index === 2 && <HelpOutlineSharp />}
              {index === 3 && <SmsFailedSharp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        <Divider />

        <Box className={classes.boxInformation}>
          <Typography className={classes.textInformation}>
            Sobre Imprensa
          </Typography>
          <Typography className={classes.textInformation}>
            Direitos autorais
          </Typography>
          <Typography className={classes.textInformation}>
            Entre em contato
          </Typography>
          <Typography className={classes.textInformation}>
            Criadores de conteúdo
          </Typography>
          <Typography className={classes.textInformation}>
            Publicidade de Desenvolvedores
          </Typography>
          <br />
          <Typography className={classes.textInformation}>
            Termos de Privacidade
          </Typography>
          <Typography className={classes.textInformation}>
            Política e Segurança
          </Typography>
          <Typography className={classes.textInformation}>
            Como funciona o Youtube
          </Typography>
          <Typography className={classes.textInformation}>
            Testar os novos recursos
          </Typography>
          <br />
          <br />
          <Typography className={classes.textInformation}>
            © 2020 Google LLC
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
