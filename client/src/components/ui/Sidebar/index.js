import * as React from 'react';
import { Link } from 'react-router-dom';
import SidebarStyles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={SidebarStyles['sa-left-sidebar']}>
            <ul className="sidebar-elements">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/campaigns">Our Campaigns</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;