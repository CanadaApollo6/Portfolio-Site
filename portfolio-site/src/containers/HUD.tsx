import React from "react";
import Head from "../components/Head/Head";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import NavTabs from "../components/Nav/NavTabs";

const HUD: React.FC = () => {
    return (
        <div
            style={{
                backgroundColor: "#b8bfcc",
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
