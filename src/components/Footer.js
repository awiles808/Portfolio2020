import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tomato",
            "&:hover": {
                fill: "#96CDD4",
                fontSize: "1.8rem",
            },
        },
 
    },
});

const Footer = () => {
    const classes = useStyles();
    return (
        
        <BottomNavigation width="auto" style={{background:"#222"}}>
        <BottomNavigationAction
        className={classes.root}
            style={{padding:0}}
            icon={<Facebook/>}
        />
        <BottomNavigationAction 
        className={classes.root}
        style={{padding:0}}
        icon={<Instagram/>}
        />
        </BottomNavigation>

    )
    
};

export default Footer
