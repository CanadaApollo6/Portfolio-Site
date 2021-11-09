import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { spotifyBlack, NavButtonData } from "../../types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import "../../containers/main.css";

const useStyles = makeStyles(() =>
    createStyles({
        text: {
            color: spotifyBlack,
            fontSize: 16,
            fontFamily: "Gotham-Black",
        },
    })
);

const NavButton: React.FC<NavButtonData> = ({ label, sectionId }) => {
    const classes = useStyles();
    return (
        <Link
            to={sectionId}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
        >
            <Button>
                <Typography variant="h6" className={classes.text}>
                    {label}
                </Typography>
            </Button>
        </Link>
    );
};

export default NavButton;
