import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Animation from "../components/Animations/Animation";
import DevelopingAnimation from "../components/Animations/JSON/developing.json";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-scroll";
import "./main.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {
    withStyles,
    createStyles,
    Theme,
    makeStyles,
} from "@material-ui/core/styles";
import { spotifyGreen, spotifyBlack } from "../types";
import {
    name,
    intro,
    linkedInUrl,
    gitHubUrl,
    gitHubUrlWork,
} from "../portfolioInfo";

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            backgroundColor: spotifyGreen,
            color: spotifyBlack,
            fontFamily: "Gotham-Black",
        },
    })
)(Badge);

const useStyles = makeStyles(() =>
    createStyles({
        text: {
            fontFamily: "Gotham-Black",
            color: spotifyBlack,
        },
        readText: {
            fontFamily: "Gotham-Black",
            color: spotifyGreen,
        },
        name: {
            marginTop: 60,
            fontFamily: "Agustina",
            color: spotifyBlack,
        },
        gitHubIcon: {
            color: spotifyBlack,
        },
    })
);

const Head: React.FC = () => {
    const classes = useStyles();
    return (
        <section id="section1">
            <Container maxWidth="md">
                <Box
                    py={8}
                    pb={9}
                    pt={9}
                    textAlign="center"
                    justifyContent="center"
                >
                    <Typography
                        variant="overline"
                        component="span"
                        style={{ fontSize: 20 }}
                        className={classes.text}
                    >
                        Hello! I'm...
                    </Typography>
                    <Typography
                        variant="h2"
                        component="h2"
                        className={classes.name}
                    >
                        {name}
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ marginTop: 60, marginBottom: 20 }}
                        className={classes.text}
                    >
                        {intro}
                    </Typography>
                    <a href={linkedInUrl}>
                        <IconButton color="primary">
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                    </a>
                    <a href={gitHubUrl}>
                        <IconButton>
                            <GitHubIcon
                                fontSize="large"
                                className={classes.gitHubIcon}
                            />
                        </IconButton>
                    </a>
                    <a href={gitHubUrlWork}>
                        <IconButton>
                            <StyledBadge badgeContent="Work">
                                <GitHubIcon
                                    fontSize="large"
                                    className={classes.gitHubIcon}
                                />
                            </StyledBadge>
                        </IconButton>
                    </a>
                    <Box mt={2}>
                        <Link
                            to="section2"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            duration={1000}
                        >
                            <Button
                                color="primary"
                                endIcon={<ArrowRightAltIcon />}
                                className={classes.readText}
                            >
                                Read more
                            </Button>
                        </Link>
                    </Box>
                    <Grid container>
                        <Grid item md={3} sm={false}></Grid>
                        <Grid item md={6} sm={12}>
                            <Animation animationData={DevelopingAnimation} />
                        </Grid>
                        <Grid item md={3} sm={false}></Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Head;
