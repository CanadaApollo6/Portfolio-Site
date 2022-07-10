import React from "react";
import FadeInSection from "../components/Animations/FadeInSection";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { CourseCardData } from "../types";
import "./main.css";
import CourseCard from "../components/CourseCard";
import { Link } from "react-scroll";
import { themeColor } from "../content/Intro";
import { courses } from "../content/Courses";

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

const Courses: React.FC = () => {
  const classes = useStyles();
  let totalHours: number = 0;
  courses.forEach((course) => {
    totalHours = totalHours + course.hours;
  });
  return (
    <section id="courses">
      <FadeInSection>
        <Container maxWidth="md">
          <Box textAlign="center" pt={9} pb={9}>
            <Typography
              variant="h3"
              component="h2"
              className={classes.titleText}
              gutterBottom
            >
              My {totalHours}+ Hour Self-Learning Journey (So Far...)
            </Typography>
            <Grid container className={classes.gridContainer} spacing={5}>
              {courses.map((course: CourseCardData) => (
                <Grid item xs={12} md={6}>
                  <CourseCard data={course} />
                </Grid>
              ))}
            </Grid>
            <Link
              to="reviews"
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

export default Courses;
