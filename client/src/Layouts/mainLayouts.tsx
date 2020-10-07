import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
