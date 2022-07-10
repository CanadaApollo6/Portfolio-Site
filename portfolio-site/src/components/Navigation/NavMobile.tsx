import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "../../containers/main.css";
import { NavButtonData, spotifyBlack } from "../../types";
import { name, linkedInUrl, themeColor } from "../../content/Intro";
import { navTabs } from "../../content/NavTabs";
import NavButtonMobile from "./NavButtonMobile";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      backgroundColor: themeColor,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    name: {
      fontFamily: "Agustina",
      color: spotifyBlack,
      flexGrow: 1,
    },
    linkedIn: {
      marginRight: theme.spacing(1),
    },
    topOfMenu: {
      color: spotifyBlack,
      fontFamily: "Gotham-Black",
    },
  })
);

const NavMobile: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <AppBar position="fixed" className={classes.navBar}>
        <ToolBar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.name} variant="h6">
            {name}
          </Typography>
          <a href={linkedInUrl}>
            <IconButton edge="end" className={classes.linkedIn}>
              <LinkedInIcon />
            </IconButton>
          </a>
        </ToolBar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List>
          <ListItem>
            <Typography variant="h5" className={classes.topOfMenu}>
              SECTIONS
            </Typography>
          </ListItem>
          <Divider />
          {navTabs.map((buttonInfo: NavButtonData) => (
            <ListItem>
              <NavButtonMobile
                label={buttonInfo.label}
                sectionId={buttonInfo.sectionId}
                setOpen={setDrawerOpen}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavMobile;
