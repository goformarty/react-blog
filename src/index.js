import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
	render() {
		return <div> Hello </div>
	}
}

class Goodbye extends React.Component {
	render() {
		return <div> Goodbye </div>
	}
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();