import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const BookedWrapper = styled(Grid)`
	padding-bottom: 100px;
	.section-title {
		font-size: 1.9rem;
		font-weight: bold;
		margin-bottom: 20px;
	}
`;

export const BookedItemContainer = styled.div`
	.booked {
		&-img {
			background-image: url(${(props: IBookedItem) => props.bg});
			height: 350px;
			width: 100%;
			background-size: auto 100%;
			background-position: center;
			background-repeat: no-repeat;
		}
		&-des {
			font-size: 1.1rem;
			margin: 10px 0;
			p {
				span {
					margin-right: 10px;
				}
			}
		}
		&-review {
			ul {
				padding: 0;
				margin: 0;
				li {
					list-style: none;
					display: inline-block;
					i {
						color: #00a799;
						&:before {
							margin: 0 5px 0 0 !important;
						}
					}
					.review-number {
						color: #333;
					}
				}
			}
		}
	}
`;
