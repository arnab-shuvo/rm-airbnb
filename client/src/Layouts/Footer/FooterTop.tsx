import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FrooteTopWrapper } from './styled';
const FooterTop: React.FC = () => {
	return (
		<FrooteTopWrapper container>
			<Grid item md={3}>
				1
			</Grid>
			<Grid item md={3}>
				2
			</Grid>
			<Grid item md={3}>
				3
			</Grid>
			<Grid item md={3}>
				4
			</Grid>
		</FrooteTopWrapper>
	);
};

export default FooterTop;
