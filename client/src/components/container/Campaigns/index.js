import * as React from 'react';

class Campaigns extends React.Component {


    
        
    render() {
        
        //const { isAuthenticated, userProfile, getProfile } = this.props.auth;
        //console.log(this.props.auth);
        return (
            <React.Fragment>
                <h1>Welcome {this.props.auth.getProfile()}</h1>
                <h3>Our Campaigns</h3>
                <p>You can purchase from our available campaigns</p>
            </React.Fragment>
        );
    }
}

export default Campaigns;