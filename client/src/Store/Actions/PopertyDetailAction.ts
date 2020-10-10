import { PROPERTY_DETAIL, LOADER_ON, LOADER_OFF } from '../types';
import { laoderToggler } from './LatestReviewAction';
import axios from 'axios';
import { PROPERTY_URL } from '../../Constants/url';

export const storeDetail = (data: IPropertyDetail) => ({
	type: PROPERTY_DETAIL,
	payload: data,
});

export const fetchPropertyDetail = (id: string) => async (dispatch: any) => {
	dispatch(laoderToggler(LOADER_ON));
	axios
		.get(`${PROPERTY_URL}/${id}`)
		.then((res: any) => {
			dispatch(storeDetail(res.data));
			setTimeout(function () {
				dispatch(laoderToggler(LOADER_OFF));
			}, 500);
		})
		.catch((err: any) => {
			console.log('err: ', err);
		});
};
