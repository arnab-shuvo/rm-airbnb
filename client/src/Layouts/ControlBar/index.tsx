import React from 'react';
import SearchPanel from './SearchPanel';
import { ControlBarWrapper } from './styled';
import { NavLink } from 'react-router-dom';

const ControlBar: React.FC = () => {
	return (
		<>
			<ControlBarWrapper>
				<ul>
					<li>
						<NavLink exact to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/search'>Search</NavLink>
					</li>
					<li>
						<NavLink to='/create'>Create</NavLink>
					</li>
				</ul>
			</ControlBarWrapper>
			<SearchPanel />
		</>
	);
};

export default ControlBar;
