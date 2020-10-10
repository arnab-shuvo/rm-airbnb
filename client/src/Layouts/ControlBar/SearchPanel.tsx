import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../Components/PageContainer';
import { SearchPanelWrapper } from './styled';
import Button from '@material-ui/core/Button';
import { DateRangePicker, DateRange } from 'materialui-daterange-picker';
import dateConverter from '../../util/dateTimeUtil';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const SearchPanel: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [dateRange, setDateRange] = useState<DateRange>({});
	const [location, setLocation] = useState<string>('');

	const history = useHistory();
	const dispatch = useDispatch();

	const submitSearch = () => {
		if (!Object.keys(dateRange).length && location === '') {
			toast.error(' Date Range or Location is required');
		} else {
			history.push(`/search?location${location}&start_date=${dateRange.startDate}&end_date=${dateRange.endDate}`);
		}
	};

	return (
		<PageContainer>
			<ToastContainer position='top-right' newestOnTop={true} closeOnClick pauseOnHover />
			<SearchPanelWrapper>
				<div className='search-panel-body'>
					<div className='search-panel-content'>
						<p className='title'>Resorts</p>
						<p className='sub-title'>Treat yourself! Your dream resort stay is just a few clicks away.</p>

						<div className='search-panel-control'>
							<Grid container>
								<Grid item md={5} xs={12}>
									<div className='search-panel-item'>
										<input
											type='text'
											className='search-prop'
											placeholder='More Places than you could ever go (but you can try)!'
											onChange={(e) => setLocation(e.target.value)}
											value={location}
										/>
									</div>
								</Grid>
								<Grid item md={3} xs={12}>
									<div className='search-panel-item'>
										<input
											onFocus={() => setOpen(true)}
											onBlur={() => setOpen(true)}
											value={`${dateConverter('Start Date', dateRange.startDate)} - ${dateConverter(
												'End Date',
												dateRange.endDate,
											)}  `}
											onChange={(e) => console.log()}
										/>
										<div className='date-range-picker-container'>
											<DateRangePicker
												open={open}
												toggle={() => setOpen(!open)}
												wrapperClassName='picker-wrapper'
												onChange={(range) => {
													setDateRange(range);
													setOpen(false);
												}}
												// minDate={new Date()}
											/>
										</div>
									</div>
								</Grid>
								<Grid item md={2} xs={12}>
									<div className='search-panel-item'>
										<input />
									</div>
								</Grid>
								<Grid item md={2} xs={12}>
									<div className='search-panel-item last'>
										<Button onClick={submitSearch} type='submit' variant='contained' color='secondary'>
											Search
										</Button>
									</div>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</SearchPanelWrapper>
		</PageContainer>
	);
};

export default SearchPanel;
