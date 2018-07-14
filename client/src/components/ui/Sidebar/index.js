import * as React from 'react';
import SidebarStyles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={SidebarStyles['sa-left-sidebar']}>
        <ul className="sidebar-elements">
        <li className="divider">Menu</li>
        <li className="active"><a href="index.html"><i className="icon mdi mdi-home"></i><span>Dashboard</span></a>
        </li>
        
            <li><a href="ui-alerts.html">Alerts</a>
            </li>
            <li><a href="ui-buttons.html">Buttons</a>
            </li>
            <li><a href="ui-cards.html"><span className="badge badge-primary float-right">New</span>Cards</a>
            </li>
            <li><a href="ui-panels.html">Panels</a>
            </li>
            <li><a href="ui-general.html">General</a>
            </li>
            <li><a href="ui-modals.html">Modals</a>
            </li>
            <li><a href="ui-notifications.html">Notifications</a>
            </li>
            <li><a href="ui-icons.html">Icons</a>
            </li>
            <li><a href="ui-grid.html">Grid</a>
            </li>
            <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a>
            </li>
            <li><a href="ui-nestable-lists.html">Nestable Lists</a>
            </li>
            <li><a href="ui-typography.html">Typography</a>
            </li>
          </ul>
        
        </div>
    );
}

export default Sidebar;