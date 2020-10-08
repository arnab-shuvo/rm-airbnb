import React from 'react';
import { HeaderLayoutLeft } from './styled';

const LeftHeader: React.FC = () => {
	return (
		<HeaderLayoutLeft>
			<ul>
				<li>
					<a href=''>Become a Host</a>
				</li>
				<li>
					<a href=''>Help</a>
				</li>
				<li>
					<a href=''>Login</a>
				</li>
				<li>
					<a href=''>Signup</a>
				</li>
			</ul>
		</HeaderLayoutLeft>
	);
};

export default LeftHeader;
