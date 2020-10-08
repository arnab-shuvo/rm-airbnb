import React from 'react';
import styled from 'styled-components';

const CustomGridWrapper = styled.div`
	flex-grow: 0;
	max-width: ${(props: ICustomGrid) => 100 / props.md}%;
	flex-basis: ${(props: ICustomGrid) => 100 / props.md}%;
	@media screen and (max-width: 767px) {
		max-width: ${(props: ICustomGrid) => 100 / props.xs}%;
		flex-basis: ${(props: ICustomGrid) => 100 / props.xs}%;
	}
	padding: ${(props: ICustomGrid) => (props.isSpaced ? '8px' : '0')};
`;

const CustomGrid: React.FC<ICustomGrid> = (props) => {
	return <CustomGridWrapper {...props}>{props.children}</CustomGridWrapper>;
};

export default CustomGrid;
