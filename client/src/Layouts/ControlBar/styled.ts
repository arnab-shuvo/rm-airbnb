import styled from 'styled-components';
import banner from '../../assets/images/banner.jpg';

export const SearchPanelWrapper = styled.div`
	padding: 40px 0;
	.search-panel {
		&-body {
			padding: 10px;
			background-image: url(${banner});
			background-size: cover;
			background-repeat: no-repeat;
			position: relative;
			&:after {
				content: '';
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				background: rgb(25 43 93 / 56%);
				z-index: 1;
			}
		}
		&-content {
			position: relative;
			z-index: 1111;
			p {
				color: #fff;
				&.title {
					font-size: 2rem;
					font-weight: bold;
				}
				color: #fff;
				&.sub-title {
					font-size: 1.2rem;
					font-weight: 500;
					margin-bottom: 20px;
				}
			}
		}
		&-control {
			background: #f5c150;
			border-radius: 2px;
			padding: 5px;
		}
		&-item {
			padding-right: 5px;
			&.last {
				padding-right: 0;
			}
			button {
				width: 100%;
				border-radius: 3px;
			}
			input {
				width: 100%;
				border: 0px;
				border-radius: 3px;
				padding: 11px;
				box-sizing: border-box;
				text-align: center;
				&::-webkit-input-placeholder {
					font-weight: bold;
					color: #333;
					font-size: 0.9rem;
				}

				&:-ms-input-placeholder {
					font-weight: bold;
					color: #333;
					font-size: 0.9rem;
				}

				&::placeholder {
					font-weight: bold;
					color: #333;
					font-size: 0.9rem;
				}
			}
		}
	}
`;
export const TabPanel = styled.div`
	border-bottom: 1px solid #dbdbdb;
`;
