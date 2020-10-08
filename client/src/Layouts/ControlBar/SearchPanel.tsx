import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../Components/PageContainer';
import { SearchPanelWrapper } from './styled';
import Button from '@material-ui/core/Button';

const SearchPanel: React.FC = () => {
	return (
		<PageContainer>
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
										/>
									</div>
								</Grid>
								<Grid item md={3} xs={12}>
									<div className='search-panel-item'>
										<input />
									</div>
								</Grid>
								<Grid item md={2} xs={12}>
									<div className='search-panel-item'>
										<input />
									</div>
								</Grid>
								<Grid item md={2} xs={12}>
									<div className='search-panel-item last'>
										<Button variant='contained' color='secondary'>
											Primary
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
