import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SearchPageWrapper } from './styled';
import SearchedItem from './SearchedItem';

const SearchPage: React.FC = () => {
	return (
		<SearchPageWrapper>
			<SearchedItem />
		</SearchPageWrapper>
	);
};

export default SearchPage;
