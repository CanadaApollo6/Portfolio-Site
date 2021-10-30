import React from "react";
import Head from "../components/Head/Head";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import NavTabs from "../components/Nav/NavTabs";
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
