import React from "react";
import FadeInSection from "../components/Animations/FadeInSection";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { ProjectCardData } from "../types";
import "./main.css";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-scroll";
import { themeColor } from "../content/Intro";
import { projects } from "../content/Projects";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleText: { fontFamily: "Gotham-Black", marginBottom: 30 },
    gridContainer: { justifyContent: "center" },
    button: {
      marginTop: 30,
      color: themeColor,
      fontFamily: "Gotham-Black",
    },
  })
);

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <section id="projects">
      <FadeInSection>
        <Container maxWidth="md">
          <Box textAlign="center" pt={9} pb={9}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.titleText}
              gutterBottom
            >
              Professional Projects ({projects.length})
            </Typography>
            <Grid container className={classes.gridContainer} spacing={5}>
              {projects.map((project: ProjectCardData) => (
                <Grid item xs={12} md={6}>
                  <ProjectCard data={project} />
                </Grid>
              ))}
            </Grid>
            <Link
              to="courses"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <Button
                endIcon={<ArrowRightAlt />}
                color="primary"
                className={classes.button}
              >
                Read More
              </Button>
            </Link>
          </Box>
        </Container>
      </FadeInSection>
    </section>
  );
};

export default Projects;
