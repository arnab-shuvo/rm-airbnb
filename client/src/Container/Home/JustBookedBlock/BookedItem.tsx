import React from 'react';
import { BookedItemContainer } from './styled';

const BookedItem: React.FC<IBookedItemProps> = ({ bg }) => {
	return (
		<BookedItemContainer bg={bg}>
			<div className='booked-img'></div>
			<div className='booked-des'>
				<p>
					<span>$7956</span> Step behind the scene of havana's theature
				</p>
			</div>
			<div className='booked-review'>
				<ul>
					<li>
						<i className='flaticon-black-star-silhouette'></i>
					</li>
					<li>
						<i className='flaticon-black-star-silhouette'></i>
					</li>
					<li>
						<i className='flaticon-black-star-silhouette'></i>
					</li>
					<li>
						<i className='flaticon-black-star-silhouette'></i>
					</li>
					<li>
						<i className='flaticon-black-star-silhouette'></i>
					</li>
					<li>
						<p className='review-number'>84 reviews</p>
					</li>
				</ul>
			</div>
		</BookedItemContainer>
	);
};

export default BookedItem;
