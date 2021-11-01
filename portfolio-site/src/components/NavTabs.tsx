import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-scroll";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../containers/HUD.css";
import { spotifyGreen, spotifyBlack } from "../types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            color: spotifyBlack,
            fontSize: 16,
            fontFamily: "Gotham-Black",
        },
        navBar: {
            backgroundColor: spotifyGreen,
            paddingTop: 8,
            paddingBottom: 8,
            textTransform: "none",
            borderTop: `8px solid ${spotifyBlack}`,
        },
    })
);

const NavTabs: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.navBar}>
            <Tabs variant="scrollable" scrollButtons="auto">
                <Link
                    to="section1"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Hello" className={classes.text} />
                </Link>
                <Link
                    to="section2"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Bio" className={classes.text} />
                </Link>
                <Link
                    to="section3"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Skills" className={classes.text} />
                </Link>
                <Link
                    to="section4"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Projects" className={classes.text} />
                </Link>
                <Link
                    to="section5"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Reviews" className={classes.text} />
                </Link>
            </Tabs>
        </AppBar>
    );
};

export default NavTabs;
