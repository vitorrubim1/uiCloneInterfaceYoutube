import * as React from "react";

import {
  Box,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  ListItemText,
  Divider,
  Typography,
  Toolbar,
} from "@material-ui/core";

import {
  Home as HomeIcon,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History,
  AccountCircle,
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Início"}
              classes={{
                primary: classes.listItemText, //here I define a class to directly change the style of a component, according to the material ui. (component >> api >> css)
              }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Whatshot />
            </ListItemIcon>
            <ListItemText
              primary={"Em alta"}
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Subscriptions />
            </ListItemIcon>
            <ListItemText
              primary={"Inscrições"}
              classes={{
                primary: classes.listItemText,
              }}
            />
          </ListItem>
        </List>
        <Divider />

        <ListItem button>
          <ListItemIcon>
            <VideoLibrary />
          </ListItemIcon>
          <ListItemText
            primary={"Biblioteca"}
            classes={{
              primary: classes.listItemText,
            }}
          />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText
            primary={"Histórico"}
            classes={{
              primary: classes.listItemText,
            }}
          />
        </ListItem>

        <Divider />

        <Box p={4}>
          <Typography>
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Button
            style={{ marginTop: 10, fontWeight: "bold" }}
            color="secondary"
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Box>

        <Divider />

        <Typography variant="inherit">O melhor do Youtube</Typography>
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
              {index === 0 && <AccountCircle />}
              {index === 1 && <AccountCircle />}
              {index === 2 && <AccountCircle />}
              {index === 3 && <AccountCircle />}
              {index === 4 && <AccountCircle />}
              {index === 5 && <AccountCircle />}
              {index === 6 && <AccountCircle />}
              {index === 7 && <AccountCircle />}
              {index === 8 && <AccountCircle />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        <Divider />

        <ListItem button>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <ListItemText
            primary={"Histórico"}
            classes={{
              primary: classes.listItemText,
            }}
          />
        </ListItem>

        <Divider />

        {["Youtube Premium", "Ao live"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountCircle /> : <VideoLibrary />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        <Divider />

        {[
          "Configurações",
          "Histórico de denúncias",
          "Ajuda",
          "Enviar feedback",
         
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <AccountCircle />}
              {index === 1 && <AccountCircle />}
              {index === 2 && <AccountCircle />}
              {index === 3 && <AccountCircle />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}

        <Divider />

        <Typography>Sobre Imprensa</Typography>
        <Typography>Direitos autorais</Typography>
        <Typography>Entre em contato</Typography>
        <Typography>Criadores de conteúdo</Typography>
        <Typography>Publicidade de Desenvolvedores</Typography>
        <br />
        <Typography>Termos de Privacidade</Typography>
        <Typography>Política e Segurança</Typography>
        <Typography>Como funciona o Youtube</Typography>
        <Typography>Testar os novos recursos</Typography>
        <br />
        <br />
        <Typography>© 2020 Google LLC</Typography>

      </Box>
    </Drawer>
  );
}
