import React from 'react';
import { ReviewItemWrapper } from './styled';
import Grid from '@material-ui/core/Grid';
import ImageUrlBuilder from '../../../util/imageUrlBuilder';
import { useHistory } from 'react-router';
import ratingCalculator from '../../../util/ratingCalculator';

const ReviewItem: React.FC<ILatestReviewProp> = ({ property }) => {
	const { title, comments, description, image, uuid } = property;
	const history = useHistory();

	let latestComment = comments[comments.length - 1];
	let actualRating = ratingCalculator(comments);

	const propertyDetail = (id: string) => {
		history.push(`property/${id}`);
	};

	return (
		<ReviewItemWrapper onClick={() => propertyDetail(uuid)}>
			<div className='item-img' style={{ background: `url(${ImageUrlBuilder(image[0])})` }}></div>
			<div className='item-star'>
				{Array.from({ length: actualRating }, (item, index) => (
					<i key={index} className='flaticon-black-star-silhouette'></i>
				))}
			</div>
			<div className='item-des'>
				<p>{latestComment ? latestComment.comment : ''}</p>
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
							<p className='name'>{latestComment ? latestComment.user.name : ''}</p>
							<p className='location'>{latestComment ? latestComment.user.location : ''}</p>
						</div>
					</Grid>
				</Grid>
			</div>
		</ReviewItemWrapper>
	);
};

export default ReviewItem;
