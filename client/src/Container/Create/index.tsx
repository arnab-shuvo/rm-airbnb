import React, { useState } from 'react';
import { CreateFormWrapper } from './styled';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import MenuItem from '@material-ui/core/MenuItem';
import { DateRangePicker, DateRange } from 'materialui-daterange-picker';
import dateConverter from '../../util/dateTimeUtil';
import { Button } from '@material-ui/core';

const CreateProperty: React.FC = () => {
	const [filed, setFiles] = useState<File[]>([]);
	const [currency, setCurrency] = React.useState('single');
	const [open, setOpen] = useState<boolean>(false);
	const [dateRange, setDateRange] = useState<DateRange>({});
	console.log(dateRange, 'dateRange');

	const uploadFile = (files: File[]) => {
		if (files.length) {
			const reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onload = () => {
				console.log(reader.result);
			};
		}
	};
	const currencies = [
		{
			value: 'single',
			label: 'Single Bed',
		},
		{
			value: 'double',
			label: 'Double Bed',
		},
	];
	return (
		<CreateFormWrapper>
			<p className='title'>Uplaod New property Information</p>
			<form>
				<Grid container spacing={2}>
					<Grid item md={6} xs={12}>
						<TextField id='outlined-helperText' label='Title' defaultValue='' variant='outlined' />
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField id='outlined-helperText' label='Description' defaultValue='' variant='outlined' />
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField id='outlined-helperText' label='City' defaultValue='' variant='outlined' />
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField id='outlined-helperText' label='Country' defaultValue='' variant='outlined' />
					</Grid>
					<Grid item md={6} xs={12}>
						<div className='upformtime'>
							<TextField
								id='outlined-helperText'
								onFocus={() => setOpen(true)}
								onBlur={() => setOpen(true)}
								value={`${dateConverter('Start Date', dateRange.startDate)} - ${dateConverter('End Date', dateRange.endDate)}  `}
								label='Available Date'
								defaultValue=''
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
								/>
							</div>
						</div>
					</Grid>
					<Grid item md={6} xs={12}>
						<TextField
							id='outlined-select-currency'
							select
							label='Property Type'
							onChange={() => console.log('asdad')}
							helperText='Please select your currency'
							variant='outlined'>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
					</Grid>
					<Grid item md={12} xs={12}>
						<DropzoneArea onChange={uploadFile} acceptedFiles={['image/jpeg', 'image/png']} />
					</Grid>
					<Grid item md={12} xs={12}>
						<Button className='submit-btn' variant='contained' color='primary'>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
		</CreateFormWrapper>
	);
};

export default CreateProperty;
