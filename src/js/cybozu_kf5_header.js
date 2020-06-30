import React from 'react';
import ReactDOM from 'react-dom';
import KfiveCustemHeader from './custom_kf5_cybozu_header';

window.Promise = window.Promise || Promise;
ReactDOM.render(<KfiveCustemHeader />, document.getElementById('header'));
