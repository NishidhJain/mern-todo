import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<div className='app'>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Dashboard />
					</Route>
					<Route path='/signin' exact>
						<Login />
					</Route>
					<Route path='/signup' exact>
						<Register />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
