import * as React from 'react';
import loading from './loading.svg';
import loadingStyles from './Callback.module.scss';

class Callback extends React.Component {
    render() {
        return (
            <div className={loadingStyles.loading}>
                <img src={loading} alt="loading" />
            </div>
        );
    }
}

export default Callback;