import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { NavButtonData } from "../../types";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";
import { themeColor } from "../../portfolioInfo";
import "../../containers/main.css";

const useStyles = makeStyles(() =>
    createStyles({
        text: {
            color: themeColor,
            fontFamily: "Gotham-Black",
        },
    })
);

interface NavButtonMobileProps extends NavButtonData {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavButtonMobile: React.FC<NavButtonMobileProps> = ({
    label,
    sectionId,
    setOpen,
}) => {
    const classes = useStyles();
    return (
        <Link
            to={sectionId}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={2500}
            onClick={() => setOpen(false)}
        >
            <Button>
                <Typography variant="h6" className={classes.text}>
                    {label}
                </Typography>
            </Button>
        </Link>
    );
};

export default NavButtonMobile;
