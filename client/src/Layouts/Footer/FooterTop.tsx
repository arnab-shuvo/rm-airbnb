import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FrooteTopWrapper } from './styled';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const FooterTop: React.FC = () => {
	const propType = [
		{
			value: 'english',
			label: 'English',
		},
		{
			value: 'french',
			label: 'French',
		},
	];
	const propType2 = [
		{
			value: 'inr',
			label: 'INR',
		},
		{
			value: 'usd',
			label: 'USD',
		},
	];

	return (
		<FrooteTopWrapper container>
			<Grid item md={3}>
				<div className='footer-select-wrapper'>
					<TextField id='outlined-select-currency' select label='English' onChange={() => console.log('asd')} variant='outlined'>
						{propType.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField id='outlined-select-currency' select label='INR' onChange={() => console.log('asd')} variant='outlined'>
						{propType2.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</div>
			</Grid>
			<Grid item md={3}>
				<p className='footer-widget-title'>WaterCnC</p>
				<ul>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Career</a>
					</li>
					<li>
						<a href='#'>Page</a>
					</li>
					<li>
						<a href='#'>Press</a>
					</li>
					<li>
						<a href='#'>Policies</a>
					</li>
					<li>
						<a href='#'>Diversity & belonging</a>
					</li>
				</ul>
			</Grid>
			<Grid item md={3}>
				<p className='footer-widget-title'>Discover</p>
				<ul>
					<li>
						<a href='#'>Trust & Safety</a>
					</li>
					<li>
						<a href='#'>Travel Credit</a>
					</li>
					<li>
						<a href='#'>Gift Cards</a>
					</li>
					<li>
						<a href='#'>WaterCnC Citizen</a>
					</li>
					<li>
						<a href='#'>Business Travel</a>
					</li>
					<li>
						<a href='#'>Megazine</a>
					</li>
				</ul>
			</Grid>
			<Grid item md={3}>
				<p className='footer-widget-title'>Hosting</p>
				<ul>
					<li>
						<a href='#'>Why Host</a>
					</li>
					<li>
						<a href='#'>Hospitality</a>
					</li>
					<li>
						<a href='#'>Reasonable Hosting</a>
					</li>
					<li>
						<a href='#'>Community Center</a>
					</li>
				</ul>
			</Grid>
		</FrooteTopWrapper>
	);
};

export default FooterTop;
