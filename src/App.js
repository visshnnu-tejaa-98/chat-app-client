import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

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
