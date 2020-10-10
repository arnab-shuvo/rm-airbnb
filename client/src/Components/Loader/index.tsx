import React from 'react';
import { LoaderImage } from './styled';
import { useSelector } from 'react-redux';

const Loader: React.FC = () => {
	const { loader } = useSelector((state: IRootStore) => state.loaderStore);
	return (
		<>
			{loader ? (
				<LoaderImage>
					<div className='load-wrapp'>
						<div className='load-3'>
							<div className='line'></div>
							<div className='line'></div>
							<div className='line'></div>
						</div>
					</div>
				</LoaderImage>
			) : (
				''
			)}
		</>
	);
};
export default Loader;
