import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SearchItemWrapper, SliderImage } from './styled';
import { Fade } from 'react-slideshow-image';
import { FILES_SERVER } from '../../Constants/url';
import 'react-slideshow-image/dist/styles.css';
import { useHistory } from 'react-router';
import ratingCalculator from '../../util/ratingCalculator';

const SearchedItem: React.FC<IPropertyDetail> = ({ property, overallRating }) => {
	const history = useHistory();
	const rating = property && property.comments ? ratingCalculator(property.comments) : 3;

	return (
		<SearchItemWrapper container spacing={3} onClick={() => history.push(`/property/${property ? property.uuid : ''}`)}>
			<Grid item md={5} xs={12}>
				<Fade>
					{property &&
						property.image?.map((image: string, index: number) => {
							return <SliderImage key={index} className='each-slide' sliderImage={FILES_SERVER + image}></SliderImage>;
						})}
				</Fade>
			</Grid>
			<Grid container item md={7} xs={12}>
				<Grid item md={12}>
					<div className='item-rating'>
						<Grid container>
							<Grid item md={6} xs={12}>
								<p className='item-type'>{property ? property.property_type : ''}</p>
							</Grid>
							<Grid item md={6} xs={12}>
								<p className='item-rate text-right'>
									<i className='flaticon-black-star-silhouette'></i> {!isNaN(rating) ? rating : ''}{' '}
									<span>({property ? property.comments?.length : ''})</span>
								</p>
							</Grid>
						</Grid>
					</div>

					<div className='item-title'>
						<p>{property ? property.title : ''}</p>
					</div>

					<div className='item-des'>
						<p>{property ? property.description : ''}</p>
					</div>
				</Grid>
				<Grid container item md={12} alignItems={'flex-end'}>
					<Grid item md={6}>
						<div className='item-batch'>
							<span>Rare Find</span>
						</div>
					</Grid>
					<Grid item md={6}>
						<div className='item-price text-right'>
							<p className='per-night'>
								<span>${property ? property.price : 0}/</span> night
							</p>
							<p className='total'>
								${property ? property.price : 0} total <span>?</span>
							</p>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</SearchItemWrapper>
	);
};

export default SearchedItem;
