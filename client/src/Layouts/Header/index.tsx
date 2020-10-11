import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderWrapper } from './styled';
import LeftHeader from './LeftHeader';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Grid container>
				<Grid item md={6} xs={12}>
					<LeftHeader />
				</Grid>
				<Grid item md={6} xs={12}>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<a href=''>Help</a>
						</li>
						<li>
							<Link to='/create'>Create property</Link>
						</li>
						<li>
							<a href=''>List page</a>
						</li>
					</ul>
				</Grid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
