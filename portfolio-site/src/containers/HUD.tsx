import React from "react";
import Head from "./Head";
import About from "./About";
import Skills from "./Skills";
import NavTabs from "../components/NavTabs";
import "./HUD.css";

const HUD: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                fontFamily: "Gotham",
            }}
        >
            <NavTabs />
            <Head />
            <About />
            <Skills />
        </div>
    );
};

export default HUD;
