import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './components/ui/Routes';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Routes>
        <App />
    </Routes>, 
    document.getElementById('dubai'));
//registerServiceWorker();
