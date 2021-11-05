import React from "react";
import FadeInSection from "../components/Animations/FadeInSection";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./main.css";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const Projects: React.FC = () => {
    const classes = useStyles();
    return (
        <section id="section4">
            <FadeInSection>
                <Container maxWidth="md">
                    <Box textAlign="center"></Box>
                </Container>
            </FadeInSection>
        </section>
    );
};

export default Projects;
