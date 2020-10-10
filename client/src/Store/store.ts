import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import LatestReviewdPropertiesReducer from './Reducers/LatestReviewReducer';
import LoaderReducer from './Reducers/LoaderReducer';
import PropertyDetailReducer from './Reducers/PropertyDetailReducer';
import PropertySearchReducer from './Reducers/PropertySearchReducer';
const rootReducer = combineReducers<IRootStore>({
	latestRevewStore: LatestReviewdPropertiesReducer,
	loaderStore: LoaderReducer,
	detailStore: PropertyDetailReducer,
	searchStore: PropertySearchReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
