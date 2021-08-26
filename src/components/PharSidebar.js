import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem,} from 'cdbreact';
import logo from './logo.svg'
import { Link, NavLink } from 'react-router-dom'
import logout from './logout.svg';

const PharSidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#ee8651">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/pharmacy"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            <img src={logo} width="120"/>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/pharmacy" activeClassName="activeClicked" style={{color: "#ee8651"}}>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/invoice" activeClassName="activeClicked" >
              <CDBSidebarMenuItem icon="table">Invoice</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/medicine" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="capsules"> Medicine</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/customer" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Customer</CDBSidebarMenuItem>
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

export default PharSidebar;