import React from 'react';
import { HomeWrapper } from './styled';
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
