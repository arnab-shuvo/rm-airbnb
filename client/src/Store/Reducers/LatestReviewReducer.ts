import { LATEST_REVIEW } from '../types';

const INITIAL_STATE: ILatestReview = {
	properties: [],
};

const LatestReviewdPropertiesReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case LATEST_REVIEW:
			return {
				...state,
				properties: action.payload,
			};
		default:
			return state;
	}
};

export default LatestReviewdPropertiesReducer;
