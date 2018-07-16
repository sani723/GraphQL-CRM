import * as React from "react";
import Contacts from "./components/container/Contacts";
import TotalContacts from './components/ui/Contacts';
import AddContact from './components/container/Contacts/AddContact';

import './App.scss';

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <div className="sa-content">
            <div className="main-content container-fluid">

              <div className="row">
                <div className="col-12 col-lg-6 col-xl-3">
                  <TotalContacts />
                </div>
              </div>
              
              <div className="row">
                <div className="col-12 col-lg-6">
                  <Contacts />
                </div>
                <div className="col-12 col-lg-6">
                  <AddContact />
                </div>
              </div>
              
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default App;
