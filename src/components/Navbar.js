import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../logo.png";

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#96CDD4',
        height: "30rem"
    },
    avatar: {
        display:"block",
        margin: "0.5rem auto",
        width: theme.spacing(15),
        height: theme.spacing(15)
    },
    listItem: {
        color: '#222'
    }
    
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
]

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.menuSliderContainer} component="div">
                <Avatar className={classes.avatar} src={avatar} alt="Auburn" />
                <Divider />
                <List>
                    {menuItems.map((lsItem, key) => ( 
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText 
                            clasName={classes.listItem}
                            primary={lsItem.listText}/>
                    </ListItem>
                    ))}
                </List>
            </Box>
            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton>
                            <ArrowBack style={{ color: "#96CDD4" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "#FFFFFF" }}>
                            Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>

    );
};

export default Navbar
