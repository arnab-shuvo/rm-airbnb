import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const PlacesWrapper = styled(Grid)`
	padding-bottom: 100px;
	.section-title {
		font-size: 1.9rem;
		font-weight: bold;
		margin-bottom: 20px;
	}
`;

export const PlaceItem = styled.div`
	.place {
		&-image {
			width: 100%;
			padding-top: 100%;
			background-image: url(${(props: IPlaceItem) => props.bg});
			background-size: cover;
			background-position: center;
			margin-bottom: 10px;
			position: relative;
		}
		&-content {
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 0;
			padding: 0 10px;
			p {
				margin-bottom: 5px;
				box-sizing: border-box;
				font-family: 'PT Serif', serif;
				span.tag {
					padding: 5px 15px;
					background: #fff;
					color: #333;
					font-size: 1.2rem;
					font-weight: bold;
					border-radius: 5px;
				}
				&.name {
					font-size: 1.8rem;
					color: #fff;
					margin-bottom: 10px;
					font-weight: bold;
					text-transform: uppercase;
				}
			}
		}
		&-des {
			p {
				font-size: 1.1rem;
				span {
					margin-left: 20px;
				}
			}
		}
	}
`;
