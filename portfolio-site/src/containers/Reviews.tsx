import React from "react";
import FadeInSection from "../components/Animations/FadeInSection";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./main.css";
import { ReviewCardData } from "../types";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../portfolioInfo";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleText: {
            fontFamily: "Gotham-Black",
            marginBottom: 20,
        },
        gridContainer: {
            justifyContent: "center",
        },
    })
);

const Reviews: React.FC = () => {
    const classes = useStyles();
    return (
        <section id="section5">
            <FadeInSection>
                <Container maxWidth="md">
                    <Box textAlign="center" pt={9} pb={9}>
                        <Typography
                            variant="h3"
                            component="h2"
                            className={classes.titleText}
                            gutterBottom
                        >
                            What Others Have Said...
                        </Typography>
                        <Grid
                            container
                            className={classes.gridContainer}
                            spacing={5}
                        >
                            {reviews.map((review: ReviewCardData) => (
                                <Grid item xs={12} md={6}>
                                    <ReviewCard reviewData={review} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </FadeInSection>
        </section>
    );
};

export default Reviews;
