import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/main.css";
import { ProjectCardData, spotifyBlack } from "../types";
import ProjectGallery from "./ProjectGallery";

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
    galleryText: {
      fontFamily: "Gotham-Black",
    },
    button: {
      marginTop: theme.spacing(2),
      textTransform: "none",
      color: spotifyBlack,
    },
  })
);

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const classes = useStyles();
  const [galleryOpen, setGalleryOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setGalleryOpen(true);
  };
  return (
    <>
      <Card className={classes.card} elevation={3}>
        <CardHeader
          title={data.companyName}
          className={classes.cardHeaderText}
          style={{ background: data.companyColor }}
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
            <strong style={{ color: spotifyBlack }}>Technologies: </strong>
            {data.techUsed}
          </Typography>
          <Typography variant="body1" className={classes.bodyText}>
            <strong style={{ color: spotifyBlack }}>Description: </strong>
            {data.description}
          </Typography>
          {data.gallery ? (
            <Button
              startIcon={<PhotoLibraryOutlinedIcon />}
              className={classes.button}
              onClick={handleOpen}
              variant="contained"
            >
              <Typography className={classes.galleryText}>
                View Gallery
              </Typography>
            </Button>
          ) : null}
        </CardContent>
      </Card>
      {data.gallery ? (
        <ProjectGallery
          open={galleryOpen}
          setOpen={setGalleryOpen}
          companyName={data.companyName}
          gallery={data.gallery}
        />
      ) : null}
    </>
  );
};

export default ProjectCard;
