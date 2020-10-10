import { LOADER_ON, LOADER_OFF } from '../types';

const INITIAL_STATE: ILoaderStore = {
	loader: false,
};

const LatestReviewdProperties = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case LOADER_ON:
			return {
				...state,
				loader: true,
			};
		case LOADER_OFF:
			return {
				...state,
				loader: false,
			};
		default:
			return state;
	}
};

export default LatestReviewdProperties;
