import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import client from './pages/client';
import { ApolloProvider } from '@apollo/react-hooks';


ReactDOM.render(
<ApolloProvider client={client}> 
<App />
 </ ApolloProvider>
, document.getElementById('root'));


