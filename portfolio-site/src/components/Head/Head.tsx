import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Animation from "../Animations/Animation";
import DevelopingAnimation from "../Animations/JSON/developing.json";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-scroll";
import "./head.css";

const Head: React.FC = () => {
    return (
        <section
            // style={{
            //     height: "100vh",
            // }}
            id="section1"
        >
            <Container maxWidth="md">
                <Box
                    py={8}
                    pb={9}
                    pt={14}
                    textAlign="center"
                    justifyContent="center"
                >
                    <Typography
                        variant="overline"
                        component="span"
                        style={{ fontSize: 20 }}
                    >
                        Hello! I'm...
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        style={{ marginTop: 60, fontFamily: "Agustina" }}
                    >
                        Riel St. Amand
                    </Typography>
                    <Typography
                        variant="h5"
                        style={{ marginTop: 60, marginBottom: 60 }}
                    >
                        A Machine Learning Engineer and Full Stack Developer. As
                        a self-taught developer, my goal is always the same with
                        any project: Learn, Improve, and Produce.
                    </Typography>
                    <Box mt={3}>
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
