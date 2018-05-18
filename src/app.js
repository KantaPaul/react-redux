import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
// import Routes from './routers/Router';
import Routes from './PortfolioComponent/Routes/Router'

let app = document.getElementById('app');

ReactDOM.render(<Routes />, app);