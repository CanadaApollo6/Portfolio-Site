import React from "react";
import Head from "./Head";
import About from "./About";
import Skills from "./Skills";
import NavTabsDesktop from "../components/Navigation/NavTabsDesktop";
import "./main.css";
import Hidden from "@material-ui/core/Hidden";

const HUD: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                fontFamily: "Gotham",
            }}
        >
            <Hidden smDown>
                <NavTabsDesktop />
            </Hidden>
            <Head />
            <About />
            <Skills />
        </div>
    );
};

export default HUD;
