import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Container/Home';
import SearchPage from '../Container/SearchPage';
import MainLayout from '../Layouts/MainLayout';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

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
			<Router>
				<MainLayout>
					<Switch>
						<Route exact path='/' component={SearchPage} />
						<Route exact path='/search' component={SearchPage} />
						<Route path='*' render={() => <Redirect to='/' />} />
					</Switch>
				</MainLayout>
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
