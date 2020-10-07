import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderWrapper } from './styled';

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Grid container>
				<Grid item md={6} xs={12}>
					sdads
				</Grid>
				<Grid item md={6} xs={12}>
					<ul>
						<li>
							<a href=''>Become a Host</a>
						</li>
						<li>
							<a href=''>Help</a>
						</li>
						<li>
							<a href=''>Login</a>
						</li>
						<li>
							<a href=''>Signup</a>
						</li>
					</ul>
				</Grid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
