import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';

function App() {
	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<Join />
				</Route>
				<Route path='/chat'>
					<Chat />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
