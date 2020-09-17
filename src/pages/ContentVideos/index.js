import * as React from "react";

import { Box, Grid, Toolbar, Typography } from "@material-ui/core";

const videos = [
  {
    id: 1,
    title:
      "McLaren rules out advancing driver change: 'The others who are destabilized'",
    channel: "F1FC",
    views: "11 mi views",
    date: "há 1 semana",
    avatar: "https://www.f1mania.net/wp-content/uploads/2020/07/0001010975_HiRes_0SEVBPC0U40Q68012NHTT06UQEF5-1170x400.jpg",
    thumb: "https://images.unsplash.com/photo-1578549651688-904046d4c9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    title:
      "Jogão! Confira os cinco gols do duelo que teve o #BRCOR como vencedor!",
    channel: "Globo Esporte",
    views: "957 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/flagged/photo-1550413231-202a9d53a331?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    title:
      "Hamburguer Artesanal - CONFIRA A RECEITA",
    channel: "Comida Artesanal Brasileira",
    views: "106 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
  },
  {
    id: 4,
    title:
      "Como é trabalhar no Google #65",
    channel: "Jerry Strazzeri",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1573141597928-403fcee0e056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
  },
  {
    id: 5,
    title:
      "Brasil registra 967 novas mortes por covid em 24 h; total passa de 134 mil",
    channel: "UOL",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 6,
    title:
      "IDEIAS DE VIAGENS PÓS QUARENTENA",
    channel: "Estou sem ideia já :/",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1559529495-2104e2264c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
  },
  {
    id: 7,
    title:
      "Protestos recentes do Black Lives Matter foram os maiores da História dos EUA, mostra levantamento",
    channel: "G1",
    views: "118 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1571987937324-e91fd2d7e69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 8,
    title:
      "Jardim em casa - IDEIAS PARA MONTAR O SEU",
    channel: "Casa e Jardim ",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1474265648294-a4236906a526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80",
  },
  {
    id: 4,
    title:
      "Jogo de cabra Macho",
    channel: "Lugin kk",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://o4u.com.br/wp-content/uploads/2018/06/mirage.jpg",
  },
  {
    id: 1,
    title:
      "Ensino EAD, A possibilidade de retorno de aula presencial?",
    channel: "InformaçãoTV",
    views: "11 mi views",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 6,
    title:
      "Materias em escolas com incentivo a programação",
    channel: "Estou sem ideia já :/",
    views: "233 mil visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 6,
    title:
      "Leia mais irmão, melhor coisa <3",
    channel: "Estou sem ideia já :/",
    views: "5 bilhões de visualizações",
    date: "há 1 semana",
    avatar: "/images/avatar.jpeg",
    thumb: "https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  },
];

export default function ContentVideos() {
  return (
    <Box>
      <Toolbar /> {/* to give a distance */}
      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 800 }}>
        Recomendados
      </Typography>
      <Grid container spacing={4}>
        {videos.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
            <Box>
              <img
                src={item.thumb}
                alt={item.title}
                style={{ width: "100%", maxHeight: "200px" }}
              />

              <Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  gutterBottom
                  variant="body1"
                  color="textPrimary"
                >
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="body2"
                  color="textSecondary"
                >
                  {item.channel}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  { `${item.views} - ${item.date}` }
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
