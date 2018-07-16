import * as React from 'react';
import { Mutation } from "react-apollo";
import { ADD_CONTACT, GET_CONTACTS, TOTAL_CONTACTS } from '../../../queries';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            avatarUrl: ''
        }
    }


    handleButtonState = () => {
        const {firstName, lastName, avatarUrl} = this.state;
        let elemButton = document.querySelector(".btnAddContact");
        if(firstName === '' || lastName === '' || avatarUrl === '') {
            elemButton.setAttribute('disabled', 'disabled');
        } else {
            elemButton.removeAttribute('disabled');
        }
    }


    componentDidMount() {
        this.handleButtonState();
    }

    componentDidUpdate() {
        this.handleButtonState();
    }

    

   render() {
       
       return (
           <Mutation mutation={ADD_CONTACT}>
            {(createUser,{data}) => (
                <form id="add-contact">
                    <div className="form-group"><input type="text" className="form-control" id="txtfirstName" onChange={(e) => this.setState({firstName: e.target.value})} placeholder="First name" /></div>
                    <div className="form-group"><input type="text" className="form-control" id="txtLastName" onChange={(e) => this.setState({lastName: e.target.value})} placeholder="Last name" /></div>
                    <div className="form-group"><input type="text" className="form-control" id="txtAvatarUrl" onChange={(e) => this.setState({avatarUrl: e.target.value})} placeholder="Avatar url" /></div>
                    <div className="form-group"><button
                        className="btn btn-primary btnAddContact"
                         onClick={event => {
                            event.preventDefault();
                            createUser({
                                variables: {
                                    firstName: this.state.firstName,
                                    lastName: this.state.lastName,
                                    avatarUrl: this.state.avatarUrl
                                },
                                refetchQueries: [ {query: GET_CONTACTS},{query: TOTAL_CONTACTS} ]
                            }).then( res => {
                                this.setState({
                                    firstName: '',
                                    lastName: '',
                                    avatarUrl: ''
                                });
                            });
                        }}>
                        Add Contact
                        </button>
                    </div>
                </form>
            )}
           </Mutation>
       );
   } 
}

export default AddContact;