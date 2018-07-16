import * as React from "react";
import cx from 'classnames';
import Contacts from "./components/container/Contacts";
import TotalContacts from './components/ui/Contacts';
import AddContact from './components/container/Contacts/AddContact';

import AppStyles from './App.module.scss';

class App extends React.Component {
  render() {
    return (
          <div className={cx(AppStyles['sa-content'])}>
            <div className={cx("container-fluid",AppStyles['main-content'])}>

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
    );
  }
}

export default App;
