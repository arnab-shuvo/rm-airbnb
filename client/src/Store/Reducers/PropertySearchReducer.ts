import { PROPERTY_SEARCH } from '../types';

const INITIAL_STATE: IPropertySearch = {
	currentPage: 0,
	property: [],
	totalPages: 0,
	nextPage: 0,
};

const PropertySearchlReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case PROPERTY_SEARCH:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default PropertySearchlReducer;
