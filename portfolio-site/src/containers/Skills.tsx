import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SkillAvatar from "../components/SkillAvatar";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { SkillAvatarProps } from "../types";
import Animation from "../components/Animations/Animation";
import WebDevAnimation from "../components/Animations/JSON/web-developer.json";
import Button from "@material-ui/core/Button";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-scroll";
import "./main.css";
import FadeInSection from "../components/Animations/FadeInSection";
import { skills, themeColor } from "../portfolioInfo";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            justifyContent: "center",
            marginTop: 5,
        },
        titleText: {
            fontFamily: "Gotham-Black",
        },
        button: {
            marginTop: 15,
            color: themeColor,
            fontFamily: "Gotham-Black",
        },
    })
);

const Skills: React.FC = () => {
    const classes = useStyles();
    return (
        <section id="section3">
            <FadeInSection>
                <Container maxWidth="md">
                    <Box pt={9} pb={12} textAlign="center">
                        <Typography
                            variant="h3"
                            component="h2"
                            className={classes.titleText}
                        >
                            My (Growing) Technology Skillset
                        </Typography>

                        <Grid container>
                            <Grid item md={3} sm={false}></Grid>
                            <Grid item md={6} sm={12}>
                                <Animation animationData={WebDevAnimation} />
                            </Grid>
                            <Grid item md={3} sm={false}></Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={5}
                            className={classes.container}
                        >
                            {skills.map((skill: SkillAvatarProps) => (
                                <Grid item xs={6} md={2}>
                                    <SkillAvatar
                                        imageSrc={skill.imageSrc}
                                        skillName={skill.skillName}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Link
                            to="section4"
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

export default Skills;
