import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { SkillAvatarProps, spotifyBlack } from "../../types";
import "../../containers/HUD.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatar: {
            width: theme.spacing(10),
            height: theme.spacing(10),
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: theme.spacing(2),
            transition: "transform .2s",
            "&:hover": {
                transform: "scale(1.2)",
            },
        },
        text: {
            fontFamily: "Gotham-Black",
            color: spotifyBlack,
        },
    })
);

const SkillAvatar: React.FC<SkillAvatarProps> = ({ imageSrc, skillName }) => {
    const classes = useStyles();
    return (
        <div>
            {/* <Avatar
                variant="square"
                alt=""
                src={imageSrc}
                className={classes.avatar}
            /> */}
            <img src={imageSrc} className={classes.avatar} />
            <Typography
                variant="h6"
                component="h4"
                gutterBottom={true}
                className={classes.text}
            >
                {skillName}
            </Typography>
        </div>
    );
};

export default SkillAvatar;
