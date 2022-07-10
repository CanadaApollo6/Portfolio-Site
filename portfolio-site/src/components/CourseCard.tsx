import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/main.css";
import { CourseCardData, spotifyBlack } from "../types";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import UpdateIcon from "@material-ui/icons/Update";

interface CourseCardProps {
  data: CourseCardData;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeaderText: {
      fontSize: 16,
      color: "#ffffff",
      fontFamily: "Gotham-Black",
    },
    roleText: { fontFamily: "Gotham-Black", marginTop: theme.spacing(1) },
    courseLogo: {
      height: theme.spacing(27),
    },
    dateText: { fontFamily: "Gotham-Black", color: "grey" },
    descriptionText: {
      fontFamily: "Gotham-Black",
      color: "grey",
      textAlign: "left",
      marginBottom: theme.spacing(2),
    },
    instructorText: {
      fontFamily: "Gotham-Black",
      textAlign: "left",
      color: "grey",
    },
    techText: {
      fontFamily: "Gotham-Black",
      textAlign: "left",
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
      color: "grey",
    },
    card: {
      transition: "transform .2s",
      "&:hover": {
        transform: "scale(1.02)",
      },
    },
    urlText: {
      fontFamily: "Gotham-Black",
      textTransform: "none",
    },
    button: {
      marginTop: theme.spacing(2),
      textTransform: "none",
      color: spotifyBlack,
    },
  })
);

const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardMedia
          image={data.logo}
          title={data.title}
          className={classes.courseLogo}
        />
        <CardContent>
          <Typography variant="h5" className={classes.roleText}>
            {data.title}
          </Typography>
          <Typography variant="subtitle1" className={classes.dateText}>
            {data.hours} Hours
          </Typography>
          <Typography variant="body1" className={classes.techText}>
            <strong style={{ color: spotifyBlack }}>Technologies: </strong>
            {data.technologies}
          </Typography>
          <Typography variant="body1" className={classes.descriptionText}>
            <strong style={{ color: spotifyBlack }}>Description: </strong>
            {data.description}
          </Typography>
          <Typography variant="body1" className={classes.instructorText}>
            <strong style={{ color: spotifyBlack }}>Instructor: </strong>
            {data.instructor}
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Button
                startIcon={<MenuBookIcon />}
                className={classes.button}
                variant="contained"
                href={data.courseUrl}
              >
                <Typography className={classes.urlText}>Course</Typography>
              </Button>
            </Grid>
            <Grid item xs={6}>
              {data.isComplete ? (
                <Button
                  startIcon={<DoneAllIcon />}
                  className={classes.button}
                  variant="contained"
                  href={data.courseCertificateUrl}
                >
                  <Typography className={classes.urlText}>
                    Certificate
                  </Typography>
                </Button>
              ) : (
                <Button
                  startIcon={<UpdateIcon />}
                  className={classes.button}
                  variant="contained"
                  disabled
                >
                  <Typography className={classes.urlText}>Ongoing</Typography>
                </Button>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default CourseCard;
