import { PROPERTY_DETAIL } from '../types';

const INITIAL_STATE: IPropertyDetail = {
	property: {},
	overallRating: 0,
};

const PropertyDetailReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case PROPERTY_DETAIL:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default PropertyDetailReducer;
