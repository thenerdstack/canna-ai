import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(4)}px`,
  },
}));

function FeaturesSection2(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Have fun!",
      subtitle:
        "We've gamified everything so you feel like you're having fun when you're actually doing free work for us. Win win!",
      icon: EmojiEmotionsIcon,
      iconColor: "primary.main",
    },
    {
      title: "Charge up",
      subtitle:
        "If you want to keep having fun remember to stay charged! And by that we mean you need to buy our ERC-20 CHARGE token to keep playing.",
      icon: OfflineBoltIcon,
      iconColor: "secondary.main",
    },
    {
      title: "Pick your flavor",
      subtitle:
        "Dark mode is so last year. We have a light mode and turquoise mode. Either way, your eyes are going to hurt. Don't forget to stay charged!",
      icon: Brightness4Icon,
      iconColor: "#00d1b2",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} justifyContent="center" spacing={7}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={4} key={index}>
              <Box textAlign="center">
                <Box color={item.iconColor} fontSize="4.5rem">
                  <item.icon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom={true}>
                  {item.title}
                </Typography>
                <Box mt={3}>
                  <Typography variant="subtitle1">{item.subtitle}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
