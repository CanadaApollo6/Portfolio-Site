import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../../containers/main.css";
import { NavButtonData, spotifyGreen } from "../../types";
import Toolbar from "@material-ui/core/Toolbar";
import NavButton from "./NavButton";
import { navTabs } from "../../portfolioInfo";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: spotifyGreen,
            textTransform: "none",
            // borderTop: `8px solid ${spotifyBlack}`,
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
                {navTabs.map((nav: NavButtonData) => (
                    <NavButton label={nav.label} sectionId={nav.sectionId} />
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default NavTabsDesktop;
