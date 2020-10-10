import { PROPERTY_SEARCH, LOADER_ON, LOADER_OFF } from '../types';
import { laoderToggler } from './LatestReviewAction';
import axios from 'axios';
import { PROPERTY_SEARCH_URL } from '../../Constants/url';

export const storeSearchData = (data: IPropertyDetail) => ({
	type: PROPERTY_SEARCH,
	payload: data,
});

export const searchProperty = (searchQuery: any) => async (dispatch: any) => {
	dispatch(laoderToggler(LOADER_ON));

	const searchParams = new URLSearchParams(searchQuery);
	axios
		.get(`${PROPERTY_SEARCH_URL}?${searchParams}`)
		.then((res: any) => {
			dispatch(storeSearchData(res.data));
			setTimeout(function () {
				dispatch(laoderToggler(LOADER_OFF));
			}, 500);
		})
		.catch((err: any) => {
			console.log('err: ', err);
		});
};
