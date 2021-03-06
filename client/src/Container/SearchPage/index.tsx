import React, { useEffect } from 'react';
import { SearchPageWrapper } from './styled';
import SearchedItem from './SearchedItem';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { searchProperty } from '../../Store/Actions/SearchPropertyAction';
import { DateParserToISO } from '../../util/dateTimeUtil';

const SearchPage: React.FC = () => {
	const { property } = useSelector((state: IRootStore) => state.searchStore);
	let params = new URLSearchParams(useLocation().search);
	const startDate = params.get('start_date');
	const endDate = params.get('end_date');
	const location = params.get('location');
	const dispatch = useDispatch();
	useEffect(() => {
		let searchQuery: any = {
			page: 1,
		};
		if (startDate && endDate) {
			searchQuery.start_date = DateParserToISO(startDate.toString());
			searchQuery.end_date = DateParserToISO(endDate.toString());
		}
		if (location && location !== '') {
			searchQuery.location = location;
		}
		dispatch(searchProperty(searchQuery));
	}, [dispatch, startDate, endDate, location]);

	return (
		<SearchPageWrapper>
			{property.map((prop: any, index: number) => {
				return <SearchedItem property={prop} key={index} />;
			})}
		</SearchPageWrapper>
	);
};

export default SearchPage;
