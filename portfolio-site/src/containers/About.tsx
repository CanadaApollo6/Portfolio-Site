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
import { spotifyBlack } from "../types";
import FadeInSection from "../components/Animations/FadeInSection";
import { bioSteps, themeColor } from "../portfolioInfo";

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
            color: themeColor,
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
            color: themeColor,
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
                                        image={bioSteps.stepOneImage}
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
                                            {bioSteps.stepOneTitle}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            paragraph={true}
                                            className={classes.bodyText}
                                        >
                                            {bioSteps.stepOneDescription}
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
                                        image={bioSteps.stepTwoImage}
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
                                            {bioSteps.stepTwoTitle}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            paragraph={true}
                                            className={classes.bodyText}
                                        >
                                            {bioSteps.stepTwoDescription}
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
                                        image={bioSteps.stepThreeImage}
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
                                            {bioSteps.stepThreeTitle}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="textSecondary"
                                            paragraph={true}
                                            className={classes.bodyText}
                                        >
                                            {bioSteps.stepThreeDescription}
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
