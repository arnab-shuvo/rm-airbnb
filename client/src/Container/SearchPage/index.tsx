import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SearchPageWrapper } from './styled';
import SearchedItem from './SearchedItem';

const SearchPage: React.FC = () => {
	return (
		<SearchPageWrapper>
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
			<SearchedItem />
		</SearchPageWrapper>
	);
};

export default SearchPage;
