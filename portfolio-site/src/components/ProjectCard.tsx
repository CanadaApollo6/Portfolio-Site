import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/main.css";
import { ProjectCardData } from "../types";

interface ProjectCardProps {
    data: ProjectCardData;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        cardHeaderText: {
            fontSize: 16,
            color: "#ffffff",
        },
        roleText: {},
        companyLogo: {
            height: "100px",
            width: "100px",
        },
    })
);

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader
                title={data.companyName}
                className={classes.cardHeaderText}
                style={{ backgroundColor: data.companyColor }}
            />
            <CardMedia
                image={data.companyLogo}
                className={classes.companyLogo}
            />
            <CardContent></CardContent>
        </Card>
    );
};

export default ProjectCard;
