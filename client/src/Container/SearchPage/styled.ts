import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const SearchPageWrapper = styled.div``;
export const SliderImage = styled.div`
	&.each-slide {
		width: 100%;
		height: 250px;
		background-image: url(${(props: ISliderProps) => props.sliderImage});
		background-size: cover;
		background-position: center;
		border-radius: 5px;
	}
`;
export const SearchItemWrapper = styled(Grid)`
	padding: 40px 0;
	border-bottom: 1px solid #dbdbdb;
	.item {
		&-rating {
			p {
				font-size: 1.3rem;
				margin-bottom: 15px;
			}
			.item {
				&-rate {
					i {
						&:before {
							margin-right: 5px !important;
							color: #eb4c60;
						}
					}
					span {
						color: #888888;
					}
				}
			}
		}
		&-title {
			font-size: 1.6rem;
			margin-bottom: 10px;
			color: #000;
		}
		&-des {
			font-size: 1.3rem;
		}
		&-batch {
			span {
				background: #f1f1f1;
				padding: 5px 10px;
				border-radius: 10px;
				color: #000;
				display: inline-block;
			}
		}
		&-price {
			.per-night {
				font-size: 1.6rem;
				span {
					color: #000;
					font-weight: bold;
				}
			}
			.total {
				font-size: 1.3rem;
				span {
					display: inline-block;
					height: 20px;
					width: 20px;
					border: 1px solid #536475;
					font-size: 1rem;
					text-align: center;
					border-radius: 50%;
				}
			}
		}
	}
`;
