// @flow

import * as React from "react";
import cx from 'classnames';
import { Query } from "react-apollo";
import { GET_CONTACTS } from '../../../queries';
import Loading from '../../ui/Loading';
import ContactsStyles from './Contacts.module.scss';

const Contacts = () => {
    return (
      <Query query={GET_CONTACTS}>
        {
          ({loading, error, data}) => {
            if(loading) return <Loading />;
            if(error) return <p>Error :( {error}</p>;
            return (
                <div className={cx('card card-table', ContactsStyles['table'])}>
                    <div className="card-header">
                        <div className="tools dropdown"> 
                            <span className="icon mdi mdi-download"></span>
                            <a className="dropdown-toggle" href="# " role="button" data-toggle="dropdown">
                                <span className="icon mdi mdi-more-vert"></span>
                            </a>
                            <div className="dropdown-menu" role="menu">
                                <a className="dropdown-item" href="# ">Action</a>
                                <a className="dropdown-item" href="# ">Another action</a>
                                <a className="dropdown-item" href="# ">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="# ">Separated link</a>
                            </div>
                        </div>
                        <div className="title">Users</div>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead>
                                <tr>
                                    <th style={{width:'40%'}}>User</th>
                                    <th className="number">Commit</th>
                                    <th style={{width:"20%"}}>Date</th>
                                    <th className="actions"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.getContacts.map(item => 
                                    (<tr key={item.id}>
                                        <td className="user-avatar">
                                            <img className={ContactsStyles['user-avatar']} src={item.avatarUrl} alt="Avatar" />
                                            {item.firstName} {item.lastName}
                                        </td>
                                        <td>Topbar dropdown style</td>
                                        <td>Aug 16, 2018</td>
                                        <td className="actions">
                                            <a className="icon" href="# ">
                                                <i className="mdi mdi-github-alt"></i>
                                            </a>
                                        </td>
                                    </tr>)
                                )}
                            </tbody>
                        </table>
                    </div>
                
                </div>
              
            );
          }
        }
      </Query>
    );
    
      
  
  
};

export default Contacts;
