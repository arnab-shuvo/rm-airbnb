import React from 'react';
import Grid from '@material-ui/core/Grid';

const PageContainer: React.FC<IPageContainer> = ({ children }) => {
	return (
		<Grid container justify={'center'}>
			<Grid item md={8} xs={12}>
				{children}
			</Grid>
		</Grid>
	);
};

export default PageContainer;
