import gql from "graphql-tag";

const GET_CONTACTS = gql`
    query getContacts($limit: Int) {
        getContacts(limit: $limit) {
            id
            firstName
            lastName
            avatarUrl
        }
    }
`;

const ADD_CONTACT = gql`
    mutation createUser($firstName: String!, $lastName: String!, $avatarUrl: String! ) {
        createUser(firstName: $firstName, lastName: $lastName, avatarUrl: $avatarUrl ) {
            id
        }
    }
`; 


const TOTAL_CONTACTS = gql`
   {
    totalContacts
   } 
`;


export {GET_CONTACTS, ADD_CONTACT, TOTAL_CONTACTS};