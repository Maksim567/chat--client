import React from 'react';
import {Grid} from "@material-ui/core";
import UsersContainer from "../UsersContainer";
import ChatField from "../ChatField";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = `calc(100%)`;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        background: 'blue',
        width: drawerWidth,

    },
    drawer: {
        [theme.breakpoints.up('xs')]: {
            display: 'none'
        },
    }
}));

function Main() {

    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Grid container>
                <Grid xs={12} sm={5} lg={3}>
                    <UsersContainer/>
                </Grid>
                <Grid xs={12} sm={7} lg={9}>
                    <ChatField/>
                </Grid>
            </Grid>

            {/*

            <Grid xs={12}>
    <Hidden smUp implementation="css">
        <Drawer
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
                paper: classes.drawerPaper,
            }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            <IconButton
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <ChatField/>
        </Drawer>
    </Hidden>
</Grid>

Grid<IconButton
    color="inherit"
    aria-label="open drawer"
    edge="start"
    onClick={handleDrawerToggle}
    className={classes.menuButton}
>
    <MenuIcon />
</IconButton>


            */}

        </>
    );
}

export default Main;


