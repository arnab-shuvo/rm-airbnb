declare module 'react-slideshow-image';

interface IPageContainer {
	children: ReactNode;
}
interface ICustomGrid {
	children: ReactNode;
	md: number;
	xs: number;
	isSpaced: boolean;
}
interface ISliderProps {
	sliderImage: string;
}
