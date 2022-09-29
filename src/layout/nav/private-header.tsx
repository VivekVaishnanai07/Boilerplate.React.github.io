import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { logout } from '../main/types';

export const PrivateHeader = (
  <React.Fragment>
    <ListItemButton>
      <Link to={'/dashboard'}>
        <ListItemIcon >
          <DashboardIcon className='navbar-content-color' />
        </ListItemIcon>
      </Link>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <Link to={'/customers'}>
        <ListItemIcon>
          <PeopleIcon className='navbar-content-color' />
        </ListItemIcon>
      </Link>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <Link to={'/products'}>
        <ListItemIcon>
          <ShoppingCartIcon className='navbar-content-color' />
        </ListItemIcon>
      </Link>
      <ListItemText primary="Products" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon className='navbar-content-color' />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon className='navbar-content-color' />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
    <ListItemButton>
      <Link to={'/'}>
        <ListItemIcon>
          <LogoutIcon className='navbar-content-color' />
        </ListItemIcon>
      </Link>
      <ListItemText primary="Logout" onClick={logout} />
    </ListItemButton>
  </React.Fragment>
);