import * as React from 'react';
import { Query } from 'react-apollo';
import { GET_CONTACTS } from '../../../queries';
import Loading from '../../ui/Loading';
import ContactsStyles from './Contacts.module.scss';

class ContactsList extends React.Component {
    render() {
        return (
            <div className={ContactsStyles.wrapper}>
                <Query query={GET_CONTACTS}>
                {
                ({loading, error, data}) => {
                    if(loading) return <Loading />;
                    if(error) return <p>Error :( {error}</p>;
                    return (
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
                    
                    );
                }
                }
            </Query>
        </div>
        );
    }
}

export default ContactsList;