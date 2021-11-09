import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { spotifyBlack, spotifyGreen, ReviewCardData } from "../types";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/main.css";

interface ReviewCardProps {
    reviewData: ReviewCardData;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {},
        reviewText: {
            color: "grey",
            fontFamily: "Gotham-Black",
            textAlign: "left",
        },
        authorText: {
            color: spotifyBlack,
            fontFamily: "Gotham-Black",
            textAlign: "left",
            marginTop: 10,
        },
        titleText: {
            color: spotifyBlack,
            fontFamily: "Gotham-Black",
            textAlign: "left",
        },
        companyText: {
            color: spotifyGreen,
            fontFamily: "Gotham-Black",
            textAlign: "left",
        },
    })
);

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewData }) => {
    const classes = useStyles();
    return (
        <Card elevation={0} className={classes.card}>
            <CardContent>
                <Typography className={classes.reviewText} variant="h6">
                    "{reviewData.quote}"
                </Typography>
                <Typography className={classes.authorText}>
                    - {reviewData.reviewerName}
                </Typography>
                <Typography className={classes.titleText}>
                    {reviewData.reviewerTitle} at{" "}
                    <strong className={classes.companyText}>
                        {reviewData.reviewerCompany}
                    </strong>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
