import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';
import { Info, Announcement, Assignment, LocationCity, Apps } from '@material-ui/icons';
import { SidebarNav } from './components';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

const Sidebar = (props) => {
  const { open, variant, onClose, className, auth, ...rest } = props;
  const classes = useStyles();

  const pages = [
    {
      title: 'Home',
      href: '/',
      icon: <Apps />,
    },
    {
      title: 'Covid-19 Cases',
      href: '/cases',
      icon: <Announcement />,
    },
    {
      title: 'Social Distancing Rules',
      href: '/rules',
      icon: <Assignment />,
    },
    {
      title: 'High Risk Areas',
      href: '/areas',
      icon: <Info />,
    },
    {
      title: 'Testing Institutions',
      href: '/institutions',
      icon: <LocationCity />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} auth={auth} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
