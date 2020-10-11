import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FooterBottomWrapper } from './styled';
const FooterBottom: React.FC = () => {
	return (
		<FooterBottomWrapper container>
			<Grid item md={6} xs={12}>
				<p className='name'>WaterCNC</p>
			</Grid>
			<Grid item md={6} xs={12}>
				<ul>
					<li>
						<a>Terms</a>
					</li>
					<li>
						<a>Privacy</a>
					</li>
					<li>
						<a>Sitemap</a>
					</li>
					<li>
						<a>
							<i className='flaticon-'></i>
						</a>
					</li>
					<li>
						<a>
							<i className='flaticon-'></i>
						</a>
					</li>
					<li>
						<a>
							<i className='flaticon-'></i>
						</a>
					</li>
				</ul>
			</Grid>
		</FooterBottomWrapper>
	);
};

export default FooterBottom;
