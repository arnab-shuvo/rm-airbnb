import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FooterBottomWrapper } from './styled';
import { Link } from 'react-router-dom';
const FooterBottom: React.FC = () => {
	return (
		<FooterBottomWrapper container>
			<Grid item md={6} xs={12}>
				<p className='name'>WaterCNC</p>
			</Grid>
			<Grid item md={6} xs={12}>
				<ul>
					<li>
						<Link to='#'>Terms</Link>
					</li>
					<li>
						<Link to='#'>Privacy</Link>
					</li>
					<li>
						<Link to='#'>Sitemap</Link>
					</li>
				</ul>
			</Grid>
		</FooterBottomWrapper>
	);
};

export default FooterBottom;
