import * as React from 'react';
import cx from 'classnames';
import NavStyles from './Nav.module.scss';

class Nav extends React.Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }
    
    login() {
        this.props.auth.login();
    }
    
    logout() {
        this.props.auth.logout();
    }
    
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <nav className={cx('navbar navbar-expand fixed-top', NavStyles['sa-top-header'])}>
                <div className="container-fluid">
                  <div className={NavStyles['sa-navbar-header']}>
                    <a className={NavStyles['navbar-brand']} href="index.html">&nbsp;</a>
                  </div>
                  <div className={NavStyles['sa-navbar-right']}>
                    <div className="float-right">
                    {
                        !isAuthenticated() && (
                            <button
                              id="qsLoginBtn"
                              className="btn btn-primary"
                              onClick={this.login.bind(this)}
                            >
                              Log In
                            </button>
                          )
                      }
                      {
                        isAuthenticated() && (
                            <button
                              id="qsLogoutBtn"
                              className="btn btn-primary"
                              onClick={this.logout.bind(this)}
                            >
                              Log Out
                            </button>
                          )
                      }
                    </div>
                  </div>
                </div>
              </nav>
        );
    }
    
}

export default Nav;