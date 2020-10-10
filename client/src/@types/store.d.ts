interface IRootStore {
	latestRevewStore: ILatestReview;
	loaderStore: ILoaderStore;
	detailStore: IPropertyDetail;
	searchStore: IPropertySearch;
}
interface IPropertySearch {
	currentPage: number;
	property: IPropertyDetail[];
	totalPages: number;
	nextPage: number;
}

interface ILatestReview {
	properties: ILatestReviewBlock;
}

interface ILoaderStore {
	loader: boolean;
}

type ILatestReviewBlock = ILatestReviewProperty[];

interface ILatestReviewProperty {
	title: string;
	uuid: string;
	description: string;
	image: string[];
	comments: IPropertyComment[];
}

interface IPropertyDetail {
	property: {
		title?: string;
		uuid?: string;
		description?: string;
		image?: string[];
		comments?: IPropertyComment[];
		city?: string;
		country?: string;
		start_date?: Date;
		end_date?: Date;
	};
	overallRating?: number;
}

interface IPropertyComment {
	user: {
		name: string;
		location: string;
	};
	rating: number;
	comment: string;
}
