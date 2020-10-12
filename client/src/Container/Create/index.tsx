import React, { useState } from 'react';
import { CreateFormWrapper } from './styled';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import MenuItem from '@material-ui/core/MenuItem';
import { DateRangePicker, DateRange } from 'materialui-daterange-picker';
import dateConverter from '../../util/dateTimeUtil';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { PROPERTY_URL } from '../../Constants/url';
import { useHistory } from 'react-router';

const CreateProperty: React.FC = () => {
	const history = useHistory();
	const [filed, setFiles] = useState<File[]>([]);
	const [open, setOpen] = useState<boolean>(false);
	const [dateRange, setDateRange] = useState<DateRange>({});
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [country, setCountry] = useState<string>('');
	const [fileArray, setFileArray] = useState<any[]>([]);
	const [type, setType] = useState<string>('');
	const [price, setPrice] = useState<number>();

	const uploadFile = (files: File[]) => {
		let fileArrayTemp: any[] = [];
		if (files.length) {
			files.forEach(async (file: File) => {
				const reader = new FileReader();
				await reader.readAsDataURL(file);
				reader.onload = () => {
					fileArrayTemp.push(reader.result ?? '');
				};
			});
			setFiles(files);

			setFileArray(fileArrayTemp);
		}
	};
	const propType = [
		{
			value: 'single',
			label: 'Single Bed',
		},
		{
			value: 'double',
			label: 'Double Bed',
		},
	];

	const submitProperty = () => {
		let isSubmit = true;
		if (title.length < 4) {
			toast.error(' Provide a valid title with length of minimum 4');
			isSubmit = false;
		}
		if (description.length < 4) {
			toast.error(' Provide a valid description with length of minimum 4');
			isSubmit = false;
		}
		if (city.length < 4) {
			toast.error(' Provide a valid city ');
			isSubmit = false;
		}
		if (country.length < 4) {
			toast.error(' Provide a valid country ');
			isSubmit = false;
		}
		if (type.length < 4) {
			toast.error(' Provide a valid type ');
			isSubmit = false;
		}
		if (fileArray.length < 3 || filed.length < 3) {
			toast.error(' Provide a atleast 3 images ');
			isSubmit = false;
		}
		if (Object.keys(dateRange).length < 2) {
			toast.error(' Provide Select available dates ');
			isSubmit = false;
		}

		if (isSubmit) {
			const data = {
				title,
				description,
				city,
				country,
				property_type: type,
				start_date: Date.parse(dateRange.startDate ? dateRange.startDate.toString() : ''),
				end_date: Date.parse(dateRange.endDate ? dateRange.endDate.toString() : ''),
				image: fileArray,
			};
			axios
				.post(PROPERTY_URL, data)
				.then((res: any) => {
					toast.success(res.data.message);
					setTimeout(() => {
						history.push('/');
					}, 1000);
				})
				.catch((err: any) => {
					toast.error('Something Went wrong!! Please try again	');
				});
		}
	};
	return (
		<CreateFormWrapper>
			<ToastContainer position='top-right' newestOnTop={true} closeOnClick pauseOnHover />
			<p className='title'>Uplaod New property Information</p>
			<form>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<TextField
							onChange={(e) => setTitle(e.target.value)}
							id='outlined-helperText'
							label='Title'
							value={title}
							variant='outlined'
						/>
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField
							onChange={(e) => setDescription(e.target.value)}
							id='outlined-helperText'
							label='Description'
							value={description}
							variant='outlined'
						/>
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField onChange={(e) => setCity(e.target.value)} id='outlined-helperText' label='City' value={city} variant='outlined' />
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField
							onChange={(e) => setCountry(e.target.value)}
							id='outlined-helperText'
							label='Country'
							value={country}
							variant='outlined'
						/>
					</Grid>
					<Grid item md={4} xs={12}>
						<TextField
							onChange={(e) => setPrice(parseInt(e.target.value))}
							id='outlined-helperText'
							label='Price'
							value={price}
							variant='outlined'
						/>
					</Grid>
					<Grid item md={6} xs={12}>
						<div className='upformtime'>
							<TextField
								id='outlined-helperText'
								onFocus={() => setOpen(true)}
								onBlur={() => setOpen(true)}
								value={`${dateConverter('Start Date', dateRange.startDate)} - ${dateConverter('End Date', dateRange.endDate)}  `}
								label='Available Date'
								variant='outlined'
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
									minDate={new Date()}
								/>
							</div>
						</div>
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField
							id='outlined-select-currency'
							select
							label='Property Type'
							onChange={(e) => setType(e.target.value)}
							variant='outlined'>
							{propType.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item md={12} xs={12}>
						<p className='provide-image-title'>Provide Property images (Minimum3)</p>
						<DropzoneArea onChange={uploadFile} acceptedFiles={['image/jpeg', 'image/png']} />
					</Grid>
					<Grid item md={12} xs={12}>
						<Button onClick={submitProperty} className='submit-btn' variant='contained' color='primary'>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</CreateFormWrapper>
	);
};

export default CreateProperty;
