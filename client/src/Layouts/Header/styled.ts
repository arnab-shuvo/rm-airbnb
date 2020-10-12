import styled from 'styled-components';

export const HeaderLayoutLeft = styled.div`
	ul {
		text-align: left !important;
		margin: 0;
		padding: 0;
		li {
			margin-left: 0px !important;
			input {
				width: 100%;
				padding: 10px 15px;
				box-sizing: border-box;
				border-radius: 0;
				border: 1px solid #cdcdcd;
				&:focus {
					outline: 0;
					border: 1px solid #222;
					border-radius: 0 !important;
				}
				&.left {
					border-top-left-radius: 5px;
					border-bottom-left-radius: 5px;
					&:focus {
						border-top-left-radius: 5px !important;
						border-bottom-left-radius: 5px !important;
					}
				}
				&.right {
					border-top-right-radius: 5px;
					border-bottom-right-radius: 5px;
					&:focus {
						border-top-right-radius: 5px !important;
						border-bottom-right-radius: 5px !important;
					}
				}
			}
		}
	}
`;
export const HeaderWrapper = styled.div`
	padding: 10px;
	ul {
		margin: 0;
		padding: 0;
		text-align: right;
		li {
			list-style: none;
			display: inline-block;
			margin-left: 30px;
			a {
				color: #222;
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
`;
