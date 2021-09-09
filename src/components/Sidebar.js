import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import logo from './logo.svg'
import logout from './logout.svg'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#605bff">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/home"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            <img src={logo} width="120"/>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/home" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/schedule" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Schedule</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/patient" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Patients</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/generics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="capsules"> Generics</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{padding: '20px 5px',}}>
            <CDBSidebarMenuItem><Link to="/" style={{color: "white", textDecoration: "none"}}><img src={logout} width="15"/> Log out</Link></CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;