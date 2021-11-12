import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { ProjectGalleryData, spotifyBlack } from "../types";
import "../containers/main.css";
import { themeColor } from "../portfolioInfo";
import Typography from "@material-ui/core/Typography";

interface ProjectGalleryProps {
    companyName: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    gallery: ProjectGalleryData[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            fontFamily: "Gotham-Black",
            color: spotifyBlack,
        },
        title: {
            fontFamily: "Gotham-Black",
            color: themeColor,
        },
    })
);

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
    open,
    setOpen,
    gallery,
    companyName,
}) => {
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };

    const imageItems: ReactImageGalleryItem[] = gallery.map(
        (imageInfo: ProjectGalleryData) => {
            return {
                original: imageInfo.image,
                originalTitle: imageInfo.title,
                thumbnail: imageInfo.image,
                originalHeight: imageInfo.height,
            };
        }
    );

    return (
        <Dialog open={open} fullWidth maxWidth="lg">
            <DialogTitle>
                <Typography className={classes.title}>
                    {companyName}{" "}
                    <strong style={{ color: spotifyBlack }}>
                        Project Gallery
                    </strong>
                </Typography>
            </DialogTitle>
            <DialogContent dividers>
                <ReactImageGallery
                    items={imageItems}
                    showThumbnails={false}
                    slideDuration={500}
                    slideInterval={3000}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className={classes.button}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectGallery;
