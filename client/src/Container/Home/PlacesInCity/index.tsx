import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PlacesWrapper } from './styled';
import CustomGrid from '../../../Common/CustomGrid';
import Places from './Places';

const PlacesInCity: React.FC = () => {
	return (
		<PlacesWrapper container spacing={2}>
			<Grid item md={12}>
				<p className='section-title'>Places In London</p>
			</Grid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<Places bg={'https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<Places bg={'https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<Places bg={'https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<Places bg={'https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<Places bg={'https://a0.muscache.com/4ea/air/v2/pictures/4973ce42-d15c-4f6d-9cc3-dd0d52b60261.jpg'} />
			</CustomGrid>
		</PlacesWrapper>
	);
};
export default PlacesInCity;
