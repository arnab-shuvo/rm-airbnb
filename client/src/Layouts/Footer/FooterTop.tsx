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
						<a target='_blank' href='/about'>
							About
						</a>
					</li>
					<li>
						<a target='_blank' href='/career'>
							Career
						</a>
					</li>
					<li>
						<a target='_blank' href='/page'>
							Page
						</a>
					</li>
					<li>
						<a target='_blank' href='/press'>
							Press
						</a>
					</li>
					<li>
						<a target='_blank' href='/policies'>
							Policies
						</a>
					</li>
					<li>
						<a target='_blank' href='/div'>
							Diversity & belonging
						</a>
					</li>
				</ul>
			</Grid>
			<Grid item md={3}>
				<p className='footer-widget-title'>Discover</p>
				<ul>
					<li>
						<a target='_blank' href='/trust'>
							Trust & Safety
						</a>
					</li>
					<li>
						<a target='_blank' href='/tc'>
							Travel Credit
						</a>
					</li>
					<li>
						<a target='_blank' href='/gc'>
							Gift Cards
						</a>
					</li>
					<li>
						<a target='_blank' href='/wc'>
							WaterCnC Citizen
						</a>
					</li>
					<li>
						<a target='_blank' href='/bt'>
							Business Travel
						</a>
					</li>
					<li>
						<a target='_blank' href='/meg'>
							Megazine
						</a>
					</li>
				</ul>
			</Grid>
			<Grid item md={3}>
				<p className='footer-widget-title'>Hosting</p>
				<ul>
					<li>
						<a target='_blank' href='/wh'>
							Why Host
						</a>
					</li>
					<li>
						<a target='_blank' href='/hopitality'>
							Hospitality
						</a>
					</li>
					<li>
						<a target='_blank' href='/rh'>
							Reasonable Hosting
						</a>
					</li>
					<li>
						<a target='_blank' href='/cc'>
							Community Center
						</a>
					</li>
				</ul>
			</Grid>
		</FrooteTopWrapper>
	);
};

export default FooterTop;
