import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-scroll";
import Toolbar from "@material-ui/core/Toolbar";

const NavTabs: React.FC = () => {
    return (
        <AppBar
            position="sticky"
            style={{
                backgroundColor: "slateblue",
                paddingTop: 8,
                paddingBottom: 8,
                textTransform: "none",
            }}
        >
            <Tabs variant="fullWidth" centered scrollButtons="auto">
                <Link
                    to="section1"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Hello" />
                </Link>
                <Link
                    to="section2"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Bio" />
                </Link>
                <Link
                    to="section3"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Skills" />
                </Link>
                <Link
                    to="section3"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={1000}
                >
                    <Tab label="Projects" />
                </Link>
            </Tabs>
        </AppBar>
    );
};

export default NavTabs;
