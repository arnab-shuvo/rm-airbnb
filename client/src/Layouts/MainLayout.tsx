import React from 'react';
import Header from './Header';
import ControlBar from './ControlBar';
import Footer from './Footer';
import { LayoutContainer } from './styled';
import PageContainer from '../Common/PageContainer';

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<ControlBar />
			<PageContainer>{children}</PageContainer>

			<Footer />
		</LayoutContainer>
	);
};

export default MainLayout;
