import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundTitle = styled.p`
	font-size: 2rem;
	margin-bottom: 100px;
	text-align: center;
	a {
		color: #00a799;
		text-decoration: none;
	}
`;

const NotFound: React.FC = () => {
	return (
		<NotFoundTitle>
			Opss!! You have landed in an uncharted territory. Lets{' '}
			<Link to='/'>
				<strong>Go Back</strong>
			</Link>
		</NotFoundTitle>
	);
};

export default NotFound;
