import React from "react";
import Head from "./Head";
import About from "./About";
import Skills from "./Skills";
import NavTabsDesktop from "../components/Navigation/NavTabsDesktop";
import "./main.css";
import Hidden from "@material-ui/core/Hidden";
import Projects from "./Projects";
import Reviews from "./Reviews";
import NavMobile from "../components/Navigation/NavMobile";

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
            <Hidden mdUp>
                <NavMobile />
            </Hidden>
            <Head />
            <About />
            <Skills />
            <Projects />
            <Reviews />
        </div>
    );
};

export default HUD;
