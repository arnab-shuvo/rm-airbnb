import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomeWrapper, BannerText } from './styled';
import ReviewBlock from './ReviewBlock';
import JustBookedBlock from './JustBookedBlock';
import PlacesInCity from './PlacesInCity';

const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<ReviewBlock />
			<JustBookedBlock />
			<PlacesInCity />
		</HomeWrapper>
	);
};

export default Home;
