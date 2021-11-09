import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/main.css";
import { ProjectCardData, spotifyBlack } from "../types";

interface ProjectCardProps {
    data: ProjectCardData;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardHeaderText: {
            fontSize: 16,
            color: "#ffffff",
            fontFamily: "Gotham-Black",
        },
        roleText: { fontFamily: "Gotham-Black", marginTop: theme.spacing(1) },
        companyLogo: {
            height: theme.spacing(10),
            width: "60%",
        },
        dateText: { fontFamily: "Gotham-Black", color: "grey" },
        bodyText: {
            fontFamily: "Gotham-Black",
            textAlign: "left",
            color: "grey",
        },
        techText: {
            fontFamily: "Gotham-Black",
            textAlign: "left",
            marginBottom: theme.spacing(2),
            marginTop: theme.spacing(2),
            color: "grey",
        },
        card: {
            transition: "transform .2s",
            "&:hover": {
                transform: "scale(1.02)",
            },
        },
    })
);

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} elevation={3}>
            <CardHeader
                title={data.companyName}
                className={classes.cardHeaderText}
                style={{ backgroundColor: data.companyColor }}
            />

            <CardContent>
                <img
                    src={data.companyLogo}
                    className={classes.companyLogo}
                    alt={data.companyName}
                />
                <Typography variant="h5" className={classes.roleText}>
                    {data.role}
                </Typography>
                <Typography variant="subtitle1" className={classes.dateText}>
                    {data.startDate} - {data.endDate}
                </Typography>
                <Typography variant="body1" className={classes.techText}>
                    <strong style={{ color: spotifyBlack }}>
                        Technologies:{" "}
                    </strong>
                    {data.techUsed}
                </Typography>
                <Typography variant="body1" className={classes.bodyText}>
                    <strong style={{ color: spotifyBlack }}>
                        Description:{" "}
                    </strong>
                    {data.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
