import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Container/Home';
import MainLayout from '../Layouts/mainLayouts';

function App() {
	return (
		<Router>
			<MainLayout>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='*' render={() => <Redirect to='/' />} />
				</Switch>
			</MainLayout>
		</Router>
	);
}

export default App;
