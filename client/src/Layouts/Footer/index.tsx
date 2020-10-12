import React from 'react';
import { FrooteWrapper } from './styled';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import PageContainer from '../../Common/PageContainer';
const Footer: React.FC = () => {
	return (
		<FrooteWrapper>
			<PageContainer>
				<FooterTop />
				<FooterBottom />
			</PageContainer>
		</FrooteWrapper>
	);
};

export default Footer;
