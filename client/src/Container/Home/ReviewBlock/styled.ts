import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const ReviewerBlockWrapper = styled(Grid)`
	margin-bottom: 100px;
	.section-title {
		font-size: 1.7rem;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.section-subtitle {
		font-size: 1.2rem;
		margin-bottom: 30px;
		i {
			color: #f5c150;

			&:before {
				font-size: 32px;
				margin-right: 10px;
			}
		}
	}
`;

export const ReviewItemWrapper = styled.div`
	.item {
		&-img {
			width: 100%;
			height: 250px;
			background-size: cover !important;
			background-position: center !important;
			border-radius: 5px;
		}
		&-star {
			padding: 15px 0;
			i {
				color: #00a799;
			}
		}
		&-des {
			margin-bottom: 10px;
			p {
				text-align: justify;
			}
		}
		&-reviewer {
			.icon {
				img {
					width: 90%;
					border-radius: 50%;
				}
			}
			.reviewer-info {
				.name {
					margin-top: 5px;
					font-size: 1.1rem;
				}
				.location {
					font-size: 1 rem;
				}
			}
		}
	}
`;
