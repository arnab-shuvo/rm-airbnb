import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Container/Home';
import CreateProperty from '../Container/Create';
import SearchPage from '../Container/SearchPage';
import Details from '../Container/Details';
import MainLayout from '../Layouts/MainLayout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Loader from '../Common/Loader';

function App() {
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#00a799',
			},
			secondary: {
				main: '#3178c6',
			},
		},
	});

	return (
		<MuiThemeProvider theme={theme}>
			<Loader />
			<Router>
				<MainLayout>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/search' component={SearchPage} />
						<Route exact path='/create' component={CreateProperty} />
						<Route exact path='/property/:id' component={Details} />
						<Route path='*' render={() => <Redirect to='/' />} />
					</Switch>
				</MainLayout>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
