import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/main.css";
import { spotifyGreen, spotifyBlack } from "../../types";
import Toolbar from "@material-ui/core/Toolbar";
import NavButton from "./NavButton";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: spotifyGreen,
            textTransform: "none",
            borderTop: `8px solid ${spotifyBlack}`,
        },
        toolBar: {
            justifyContent: "space-around",
        },
    })
);

const NavTabsDesktop: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <NavButton label="Hello" sectionId="section1" />
                <NavButton label="Bio" sectionId="section2" />
                <NavButton label="Skills" sectionId="section3" />
                <NavButton label="Projects" sectionId="section4" />
                <NavButton label="Reviews" sectionId="section5" />
            </Toolbar>
        </AppBar>
    );
};

export default NavTabsDesktop;
