import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "./main.css";
import { BioStepData, spotifyBlack } from "../types";
import FadeInSection from "../components/Animations/FadeInSection";
import { bioStepList } from "../portfolioInfo";
import BioStep from "../components/BioStep";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleText: {
            fontFamily: "Gotham-Black",
            color: spotifyBlack,
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
                        {bioStepList.map((data: BioStepData, index: number) => (
                            <BioStep
                                data={data}
                                alignment={index % 2 === 0 ? "left" : "right"}
                                isLast={
                                    index === bioStepList.length - 1
                                        ? true
                                        : false
                                }
                            />
                        ))}
                    </Box>
                </Container>
            </FadeInSection>
        </section>
    );
};

export default About;
