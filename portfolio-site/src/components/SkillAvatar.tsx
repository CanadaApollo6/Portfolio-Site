import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { SkillAvatarProps, spotifyBlack } from "../types";
import "../containers/main.css";

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
      <img src={imageSrc} className={classes.avatar} alt="" />
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
