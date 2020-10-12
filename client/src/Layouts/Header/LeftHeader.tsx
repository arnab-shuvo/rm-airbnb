import React from 'react';
import { HeaderLayoutLeft } from './styled';

const LeftHeader: React.FC = () => {
	return (
		<HeaderLayoutLeft>
			<ul>
				<li>
					<input type='text' className='search-prop left' placeholder='Anywhere' defaultValue={''} />
				</li>
				<li>
					<input type='text' className='search-prop' placeholder='Anytime' defaultValue={''} />
				</li>
				<li>
					<input type='text' className='search-prop right' placeholder='1 guest' defaultValue={''} />
				</li>
			</ul>
		</HeaderLayoutLeft>
	);
};

export default LeftHeader;
