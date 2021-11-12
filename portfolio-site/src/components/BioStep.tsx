import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import { themeColor } from "../portfolioInfo";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BioStepData, spotifyBlack } from "../types";
import { Link } from "react-scroll";

interface BioStepProps {
    data: BioStepData;
    alignment: "left" | "right";
    isLast: boolean;
}

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

const BioStep: React.FC<BioStepProps> = ({ data, alignment, isLast }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={6} className={classes.stepContainer}>
            <Grid
                item
                xs={12}
                md={6}
                className={
                    alignment === "right" ? classes.switchOrder1 : undefined
                }
            >
                <Card>
                    <CardMedia className={classes.media} image={data.image} />
                </Card>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                className={
                    alignment === "right" ? classes.switchOrder0 : undefined
                }
            >
                <Box display="flex" height="100%">
                    <Box my="auto">
                        <Typography
                            variant="h2"
                            component="h3"
                            className={classes.numberHeaders}
                        >
                            {data.step}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="h2"
                            gutterBottom={true}
                            className={classes.titleText}
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            paragraph={true}
                            className={classes.bodyText}
                        >
                            {data.description}
                        </Typography>
                        {isLast ? (
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
                        ) : null}
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default BioStep;
