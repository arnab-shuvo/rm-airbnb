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
import { FILES_SERVER, PROPERTY_COMMENT_URL } from '../../Constants/url';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Details: React.FC = () => {
	const dispatch = useDispatch();
	const detail = useSelector((state: IRootStore) => state.detailStore);
	const [open, setOpen] = useState<boolean>(false);
	const [name, setName] = useState<string>();
	const [location, setLocation] = useState<string>();
	const [rating, setRating] = useState<number>();
	const [comment, setComment] = useState<string>();
	const [dateRange, setDateRange] = useState<DateRange>({});
	const { id } = useParams<{ id: string }>();

	const ratingValues = [
		{
			value: 1,
			label: 'Very bad',
		},
		{
			value: 2,
			label: 'Bad',
		},
		{
			value: 3,
			label: 'Normal',
		},
		{
			value: 4,
			label: 'Good',
		},
		{
			value: 5,
			label: 'Excellent',
		},
	];

	useEffect(() => {
		dispatch(fetchPropertyDetail(id));
	}, [dispatch, id]);

	const addComment = () => {
		if (name === '' || comment === '' || !rating || location === '') {
			toast.error(' Provide all the information to add the comment');
		} else {
			const commentData = {
				uuid: id,
				name,
				location,
				comment,
				rating,
			};
			console.log(commentData, 'commentData');

			axios
				.post(PROPERTY_COMMENT_URL, commentData)
				.then((success: any) => {
					toast.success(' Comment added');
					dispatch(fetchPropertyDetail(id));
				})
				.catch((err: any) => {
					toast.error('Something went wrong');
				});
		}
	};

	return (
		<DetailWrapper container>
			<ToastContainer position='top-right' newestOnTop={true} closeOnClick pauseOnHover />
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
					<img src={TripAdvisor} alt={'trip-advisor'} />
				</div>
			</Grid>
			<PropertyImageWrapper container item md={12} xs={12}>
				<Grid item md={8} xs={12}>
					{detail.property.image?.length && <PropertyImage bg={FILES_SERVER + detail.property.image[0]} height={'500'} />}
				</Grid>
				<Grid item md={4} xs={12}>
					{detail.property.image?.length && <PropertyImage bg={FILES_SERVER + detail.property.image[1]} height={'250'} />}
					{detail.property.image?.length && <PropertyImage bg={FILES_SERVER + detail.property.image[2]} height={'250'} />}
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
								<img alt='airBnb' src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/female-avatar-12-774634.png'} />
								<p className='property-des-user'>Arnab</p>
							</Grid>
						</Grid>
					</div>
					<div className='property-info'>
						<p className='property-info-title'>
							<i className='flaticon-home'></i>
							{detail.property.property_type ?? ''}
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

					<div className='property-reviews'>
						<p className='title'>Reviews from all users</p>
						{detail.property?.comments?.length &&
							detail.property.comments.map((comment: IPropertyComment, index: number) => {
								return (
									<div className='property-reviews-block'>
										<Grid container spacing={2}>
											<Grid item md={1}>
												<img
													alt={'airbnb'}
													src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/female-avatar-12-774634.png'}
												/>
											</Grid>
											<Grid item md={11}>
												<p className='property-reviews-block-user'>
													<strong>{comment.user.name}</strong> from {comment.user.location} rated with{' '}
													<strong>{comment.rating}</strong> star
												</p>
												<p className='property-reviews-block-description'>{comment.comment}</p>
											</Grid>
										</Grid>
									</div>
								);
							})}
					</div>
				</Grid>
				<Grid item md={5} xs={12}>
					<div className='property-operation'>
						<p className='property-operation-price'>
							<span>${detail.property?.price ?? ''}</span> per night
						</p>
						<p className='property-operation-rating'>
							<i className='flaticon-black-star-silhouette'></i>
							<span>{detail.overallRating ?? 0}</span> ({detail.property.comments ? detail.property.comments.length : 0} reviews)
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
					<div className='property-operation'>
						<p className='comment-title'>Let us know your experience: </p>
						<Grid container spacing={2}>
							<Grid item md={6} xs={12}>
								<TextField
									onChange={(e) => setName(e.target.value)}
									id='outlined-helperText'
									label='You Name'
									value={name}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									onChange={(e) => setLocation(e.target.value)}
									id='outlined-helperText'
									label='You Location'
									value={location}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									id='outlined-helperText'
									select
									label='How was your experience'
									onChange={(e) => setRating(parseInt(e.target.value))}
									variant='outlined'>
									{ratingValues.map((option) => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							</Grid>
							<Grid item md={12} xs={12}>
								<TextField
									onChange={(e) => setComment(e.target.value)}
									id='outlined-helperText'
									label='You Comment'
									value={comment}
									variant='outlined'
								/>
							</Grid>
							<Grid item md={12} xs={12}>
								<Button onClick={addComment} className='submit-btn' variant='contained' color='secondary'>
									Send
								</Button>
							</Grid>
						</Grid>
					</div>
				</Grid>
			</Grid>
		</DetailWrapper>
	);
};

export default Details;
