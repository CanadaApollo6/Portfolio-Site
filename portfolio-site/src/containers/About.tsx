import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import "./main.css";
import { spotifyBlack, spotifyGreen } from "../types";
import FadeInSection from "../components/Animations/FadeInSection";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        switchOrder1: {
            [theme.breakpoints.up("md")]: {
                order: 1,
            },
        },
        switchOrder0: {
            [theme.breakpoints.up("md")]: {
                textAlign: "right",
                order: 0,
            },
        },
        stepContainer: {
            marginBottom: theme.spacing(1),
        },
        media: {
            height: "256px",
        },
        numberHeaders: {
            fontFamily: "Gotham-Black",
            color: spotifyGreen,
        },
        titleText: {
            fontFamily: "Gotham-Black",
            color: spotifyBlack,
        },
        bodyText: {
            fontFamily: "Gotham-Black",
        },
        readText: {
            fontFamily: "Gotham-Black",
            color: spotifyGreen,
        },
    })
);

const About: React.FC = () => {
    const classes = useStyles();
    return (
        <section id="section2">
            <FadeInSection>
                <Container maxWidth="md">
                    <Box pt={9} textAlign="center">
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom={true}
                            className={classes.titleText}
                        >
                            Some Background
                        </Typography>
                    </Box>
                </Container>
                <Container maxWidth="md">
                    <Box pt={3} pb={10}>
                        <Grid
                            container
                            spacing={6}
                            className={classes.stepContainer}
                        >
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box display="flex" height="100%">
                                    <Box my="auto">
                                        <Typography
                                            variant="h2"
                                            component="h3"
                                            className={classes.numberHeaders}
                                        >
                                            01
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            gutterBottom={true}
                                            className={classes.titleText}
                                        >
                                            University of Dayton
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            paragraph={true}
                                            className={classes.bodyText}
                                        >
                                            I attended the University of Dayton
                                            from 2016-2020, earning a 3.89 GPA
                                            while playing in the Pride of Dayton
                                            Marching Band and Dayton Jazz
                                            Ensemble. I graduated with a B. Sc.
                                            in Biology, minors in Chemistry and
                                            Geology, and a 2-year GIS graduate
                                            certificate.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={6}
                            className={classes.stepContainer}
                        >
                            <Grid
                                item
                                xs={12}
                                md={6}
                                className={classes.switchOrder1}
                            >
                                <Card>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                                    />
                                </Card>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={6}
                                className={classes.switchOrder0}
                            >
                                <Box display="flex" height="100%">
                                    <Box my="auto">
                                        <Typography
                                            variant="h2"
                                            component="h3"
                                            className={classes.numberHeaders}
                                        >
                                            02
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            gutterBottom={true}
                                            className={classes.titleText}
                                        >
                                            Smart Data - Intern
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            paragraph={true}
                                            className={classes.bodyText}
                                        >
                                            From May of 2020 until August of
                                            that same year, I became a software
                                            developer intern at Smart Data. I
                                            spent my time doing hundreds of
                                            hours of learning from other
                                            developers and online courses from
                                            Udemy, along with some basic React
                                            development on a project for Google
                                            Cloud.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6}>
                                <Card>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box display="flex" height="100%">
                                    <Box my="auto">
                                        <Typography
                                            variant="h2"
                                            component="h3"
                                            className={classes.numberHeaders}
                                        >
                                            03
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            component="h2"
                                            gutterBottom={true}
                                            className={classes.titleText}
                                        >
                                            Smart Data - Software Engineer
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            paragraph={true}
                                            className={classes.bodyText}
                                        >
                                            After my internship ended, I
                                            accepted an offer in August of 2020
                                            to remain at Smart Data and become a
                                            full-time software engineer, where I
                                            remain now.
                                        </Typography>
                                        <Link
                                            to="section3"
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                        >
                                            <Button
                                                endIcon={<ArrowRightAlt />}
                                                className={classes.readText}
                                            >
                                                Read more
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </FadeInSection>
        </section>
    );
};

export default About;
