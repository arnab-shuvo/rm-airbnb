import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BookedWrapper } from './styled';
import CustomGrid from '../../../Common/CustomGrid';
import BookedItem from './BookedItem';

const JustBookedBlock: React.FC = () => {
	return (
		<BookedWrapper container spacing={2}>
			<Grid item md={12}>
				<p className='section-title'>Just Booked</p>
			</Grid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<BookedItem bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<BookedItem bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<BookedItem bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<BookedItem bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} />
			</CustomGrid>
			<CustomGrid md={5} xs={1} isSpaced={true}>
				<BookedItem bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} />
			</CustomGrid>
		</BookedWrapper>
	);
};

export default JustBookedBlock;
