import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReviewItem from './ReviewItem';
import { ReviewerBlockWrapper } from './styled';

const ReviewBlock: React.FC = () => {
	return (
		<ReviewerBlockWrapper container>
			<Grid item md={12} xs={12}>
				<p className='section-title'>Whay guests are saying about homes in the United States</p>
				<p className='section-subtitle'>
					<i className='flaticon-shooting-star'></i>United Kingdom homes were rated <strong>4.7 out of 5 stars</strong> with
					<strong>10,50,000+ reviews</strong>
				</p>
			</Grid>
			<Grid container item md={12} xs={12} spacing={2}>
				<Grid item md={4} xs={12}>
					<ReviewItem />
				</Grid>
				<Grid item md={4} xs={12}>
					<ReviewItem />
				</Grid>
				<Grid item md={4} xs={12}>
					<ReviewItem />
				</Grid>
			</Grid>
		</ReviewerBlockWrapper>
	);
};

export default ReviewBlock;
