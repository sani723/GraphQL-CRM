import * as React from 'react';
import cx from 'classnames';
import NavStyles from './Nav.module.scss';

const Nav  = () => {
    return (
        <nav className={cx('navbar navbar-expand fixed-top', NavStyles['sa-top-header'])}>
            <div className="container-fluid">
              <div className={NavStyles['sa-navbar-header']}>
                <a className={NavStyles['navbar-brand']} href="index.html">&nbsp;</a>
              </div>
              <div className={NavStyles['sa-navbar-right']}>right</div>
            </div>
          </nav>
    );
}

export default Nav;