import React from 'react';
import { Query } from 'react-apollo';
import { TOTAL_CONTACTS } from '../../../queries';
import Loading from '../Loading';

const TotalContacts = () => {
    return(
        <Query query={TOTAL_CONTACTS}>
    {
        ({loading, error, data}) => {
            if(loading) return <Loading />;
            if(error) return <p>Error :( {error}</p>;
            
            return(
                <div className="widget widget-title">
                    <div className="data-info">
                        <div className="desc">Registered Users</div>
                        <div className="value">{ data.totalContacts }</div>
                    </div>
                </div>
            );
        }
    }
    </Query>
    );
}


export default TotalContacts;