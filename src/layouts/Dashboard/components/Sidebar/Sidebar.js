import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';

import { Profile, SidebarNav } from './components';

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

  // 99 = admin
  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon />,
      permission: 99,
    },
    {
      title: 'Covid-19 Cases',
      href: '/cases',
      icon: <StoreIcon />,
      permission: 99,
    },
    {
      title: 'Social Distancing Rules',
      href: '/rules',
      icon: <StoreIcon />,
      permission: 99,
    },
    {
      title: 'High Risk Areas',
      href: '/areas',
      icon: <StoreIcon />,
      permission: 99,
    },
    {
      title: 'Testing Institutions',
      href: '/institutions',
      icon: <StoreIcon />,
      permission: 99,
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
        <Profile auth={auth} />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} auth={auth} />
      </div>
    </Drawer>
  );
};

export default Sidebar;
