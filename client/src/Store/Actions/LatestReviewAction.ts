import { LATEST_REVIEW, LOADER_ON, LOADER_OFF } from '../types';
import axios from 'axios';
import { LATEST_REVIEW_URL } from '../../Constants/url';

export const storePackage = (data: ILatestReviewBlock) => ({
	type: LATEST_REVIEW,
	payload: data,
});

export const laoderToggler = (typeValue: string) => ({
	type: typeValue,
});

export const fetchLatestReviewPackage = () => async (dispatch: any) => {
	dispatch(laoderToggler(LOADER_ON));
	axios
		.get(`${LATEST_REVIEW_URL}`)
		.then((res: any) => {
			dispatch(storePackage(res.data));
			setTimeout(function () {
				dispatch(laoderToggler(LOADER_OFF));
			}, 500);
		})
		.catch((err: any) => {
			console.log('err: ', err);
		});
};
