import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ReviewItem from './ReviewItem';
import { ReviewerBlockWrapper } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLatestReviewPackage } from '../../../Store/Actions/LatestReviewAction';
import { Link } from 'react-router-dom';

const ReviewBlock: React.FC = () => {
	const dispatch = useDispatch();
	const { properties } = useSelector((state: IRootStore) => state.latestRevewStore);
	useEffect(() => {
		dispatch(fetchLatestReviewPackage());
	}, [dispatch]);

	return (
		<ReviewerBlockWrapper container>
			{properties.length ? (
				<>
					<Grid item md={12} xs={12}>
						<p className='section-title'>Whay guests are saying about homes in the United States</p>
						<p className='section-subtitle'>
							<i className='flaticon-shooting-star'></i>United Kingdom homes were rated <strong>4.7 out of 5 stars</strong> with
							<strong>10,50,000+ reviews</strong>
						</p>
					</Grid>
					<Grid container item md={12} xs={12} spacing={2}>
						{properties.length &&
							properties.map((property: ILatestReviewProperty, index: number) => {
								return (
									<Grid item md={4} xs={12} key={index}>
										<ReviewItem property={property} />
									</Grid>
								);
							})}
					</Grid>
				</>
			) : (
				<p className='section-title'>
					No Latest review of property found. Please <Link to='/create'>Create here</Link>
				</p>
			)}
		</ReviewerBlockWrapper>
	);
};

export default ReviewBlock;
