import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'


import './index.css';
import reducers from './reducers';
import PostIndex from './components/post_index';

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Route path='/' component={PostIndex} />
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();