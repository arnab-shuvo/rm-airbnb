import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SearchItemWrapper, SliderImage } from './styled';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import banner from '../../assets/images/banner.jpg';
import banner2 from '../../assets/images/bg.jpg';

const SearchedItem: React.FC = () => {
	return (
		<SearchItemWrapper container spacing={3}>
			<Grid item md={5} xs={12}>
				<Fade>
					<SliderImage className='each-slide' sliderImage={banner}></SliderImage>
					<SliderImage className='each-slide' sliderImage={banner2}></SliderImage>
				</Fade>
			</Grid>
			<Grid container item md={7} xs={12}>
				<Grid item md={12}>
					<div className='item-rating'>
						<Grid container>
							<Grid item md={6} xs={12}>
								<p className='item-type'>Private Room</p>
							</Grid>
							<Grid item md={6} xs={12}>
								<p className='item-rate text-right'>
									<i className='flaticon-black-star-silhouette'></i> 4.61 <span>(207)</span>
								</p>
							</Grid>
						</Grid>
					</div>

					<div className='item-title'>
						<p>Private Room- 1Double & 1Single Bed-Central London</p>
					</div>

					<div className='item-des'>
						<p>
							A Private Room in Shared flat with a friendly professional female and her two lovable pugs(dogs).I look forward to hosting
							you in my home and welcoming you to London
						</p>
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
								<span>$38/</span> night
							</p>
							<p className='total'>
								$38 total <span>?</span>
							</p>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</SearchItemWrapper>
	);
};

export default SearchedItem;
