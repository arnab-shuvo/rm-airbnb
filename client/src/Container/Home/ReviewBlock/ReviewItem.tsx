import React from 'react';
import { ReviewItemWrapper } from './styled';
import Grid from '@material-ui/core/Grid';

const ReviewItem: React.FC = () => {
	return (
		<ReviewItemWrapper>
			<div
				className='item-img'
				style={{ background: 'url(https://a0.muscache.com/4ea/air/v2/pictures/1b66acbb-f665-43c5-a505-794a4f343e6b.jpg)' }}></div>
			<div className='item-star'>
				<i className='flaticon-black-star-silhouette'></i>
				<i className='flaticon-black-star-silhouette'></i>
				<i className='flaticon-black-star-silhouette'></i>
				<i className='flaticon-black-star-silhouette'></i>
				<i className='flaticon-black-star-silhouette'></i>
			</div>
			<div className='item-des'>
				<p>
					A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting you in
					my home and welcoming you to London
				</p>
			</div>
			<div className='item-reviewer'>
				<Grid container>
					<Grid item md={2}>
						<div className='icon'>
							<img src='https://justice.org.au/wp-content/uploads/2017/08/avatar-icon.png' />
						</div>
					</Grid>
					<Grid item md={8}>
						<div className='reviewer-info'>
							<p className='name'>Nicky</p>
							<p className='location'>Bangaldesh</p>
						</div>
					</Grid>
				</Grid>
			</div>
		</ReviewItemWrapper>
	);
};

export default ReviewItem;
