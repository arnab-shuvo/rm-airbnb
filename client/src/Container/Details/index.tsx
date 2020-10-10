import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { DetailWrapper, PropertyImage, PropertyImageWrapper } from './styled';
import { DateRangePicker, DateRange } from 'materialui-daterange-picker';
import dateConverter from '../../util/dateTimeUtil';
import Button from '@material-ui/core/Button';
import TripAdvisor from '../../assets/images/tr_a.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPropertyDetail } from '../../Store/Actions/PopertyDetailAction';
import { useParams } from 'react-router';

const Details: React.FC = () => {
	const dispatch = useDispatch();
	const detail = useSelector((state: IRootStore) => state.detailStore);
	const [open, setOpen] = useState<boolean>(false);
	const [dateRange, setDateRange] = useState<DateRange>({});
	const { id } = useParams<{ id: string }>();
	useEffect(() => {
		console.log(detail, 'detail');
		dispatch(fetchPropertyDetail(id));
	}, []);

	return (
		<DetailWrapper container>
			<Grid item md={12} xs={12}>
				<div className='property-summary'>
					<p className='property-summary-title'>
						{detail.property.title ?? ''}
						<i className='flaticon-black-star-silhouette'></i>
						<i className='flaticon-black-star-silhouette'></i>
						<i className='flaticon-black-star-silhouette'></i>
					</p>
					<p className='property-summary-subtitle'>
						{detail.property.city ?? ''}, {detail.property.country ?? ''}
					</p>
					<img src={TripAdvisor} />
				</div>
			</Grid>
			<PropertyImageWrapper container item md={12} xs={12}>
				<Grid item md={8} xs={12}>
					<PropertyImage bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} height={'500'} />
				</Grid>
				<Grid item md={4} xs={12}>
					<PropertyImage bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} height={'250'} />
					<PropertyImage bg={'https://a0.muscache.com/4ea/air/v2/pictures/7fbb6427-c0f2-4336-b491-b21d2c866c39.jpg'} height={'250'} />
				</Grid>
			</PropertyImageWrapper>
			<Grid container item md={12} xs={12} spacing={6}>
				<Grid item md={7} xs={12}>
					<div className='property-des'>
						<Grid container>
							<Grid item md={11} xs={12}>
								<p className='property-des-title'>{detail.property.description ?? ''}</p>
								<p className='property-des-lcoation'>{detail.property.city ?? ''}</p>
							</Grid>
							<Grid item md={1} xs={12}>
								<img src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/female-avatar-12-774634.png'} />
								<p className='property-des-user'>Arnab</p>
							</Grid>
						</Grid>
					</div>
					<div className='property-info'>
						<p className='property-info-title'>
							<i className='flaticon-home'></i>Private room in flat
						</p>
						<p className='property-info-des'>
							<span>2 guests</span>
							<span>1 bedroom</span>
							<span>1 bed</span>
							<span>1 shared bathroom</span>
						</p>
					</div>
					<div className='property-info'>
						<p className='property-info-title'>
							<i className='flaticon-check'></i>Self Checkin
						</p>
						<p className='property-info-des'>Check yourself in with the lockbox</p>
					</div>
					<div className='property-info'>
						<p className='property-info-title'>
							<i className='flaticon-breakfast-table'></i>Breakfast
						</p>
						<p className='property-info-des'>Check yourself in with the lockbox</p>
					</div>
					<div className='property-info'>
						<p className='property-info-title'>
							<i className='flaticon-call'></i>Great Communication
						</p>
						<p className='property-info-des'>Check yourself in with the lockbox</p>
					</div>

					<div className='property-features'>
						<p className='property-features-title'>A specious double room with a confy sking size bed in the heart of the East End</p>
						<p className='property-features-des'>- 5mins walk from underground</p>
						<p className='property-features-des'>- 5mins walk from Metro</p>
						<p className='property-features-des'>- 10 mins by train to city</p>
						<p className='property-features-des'>- 5 mins by train to trendy nightlife</p>
						<p className='property-features-des'>- Easy access to all tourist destination</p>
						<p className='property-features-des'>- Large variety of pubs and restaurants close by</p>
					</div>
				</Grid>
				<Grid item md={5} xs={12}>
					<div className='property-operation'>
						<p className='property-operation-price'>
							<span>$24</span> per night
						</p>
						<p className='property-operation-rating'>
							<i className='flaticon-black-star-silhouette'></i>
							<span>4.25</span> (215 reviews)
						</p>
						<p className='property-operation-date'>Dates</p>
						<div className='property-operation-date-wrapper'>
							<input
								onFocus={() => setOpen(true)}
								onBlur={() => setOpen(true)}
								value={`${dateConverter('Start Date', dateRange.startDate)} - ${dateConverter('End Date', dateRange.endDate)}  `}
								onChange={(e) => console.log()}
							/>
							<div className='date-range-picker-container'>
								<DateRangePicker
									open={open}
									toggle={() => setOpen(!open)}
									wrapperClassName='arnab-test'
									onChange={(range) => {
										setDateRange(range);
										setOpen(false);
									}}
									minDate={detail.property.start_date ?? ''}
									maxDate={detail.property.end_date ?? ''}
								/>
							</div>
						</div>
						<Button className='submit-btn' variant='contained' color='secondary'>
							Reserve
						</Button>
					</div>
				</Grid>
			</Grid>
		</DetailWrapper>
	);
};

export default Details;
