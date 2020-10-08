import React from 'react';
import { PlaceItem } from './styled';

const Places: React.FC<IBookedItemProps> = ({ bg }) => {
	return (
		<PlaceItem bg={bg}>
			<div className='place-image'>
				<div className='place-content'>
					<p>
						<span className='tag'>Guide</span>
					</p>
					<p className='name'>London Hill</p>
				</div>
			</div>
			<div className='place-des'>
				<p>
					By Arnab Dhar<span>Food Blogger</span>
				</p>
			</div>
		</PlaceItem>
	);
};
export default Places;
