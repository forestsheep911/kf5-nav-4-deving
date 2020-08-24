import 'core-js/es/map'; 
import 'core-js/es/set';
import React from 'react';
import ReactDOM from 'react-dom';
import KfiveCustomHeader from './components/KfiveCustomHeader';
import css from './css/style.scss';

window.Promise = window.Promise || Promise;
ReactDOM.render(<KfiveCustomHeader />, document.getElementById('header'));
