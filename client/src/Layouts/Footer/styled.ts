import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const FrooteWrapper = styled.div`
	border-top: 1px solid #dbdbdb;
`;
export const FrooteTopWrapper = styled(Grid)`
	border-bottom: 1px solid #dbdbdb;
	padding: 40px 0;
	ul {
		padding: 0;
		li {
			list-style: none;
			a {
				text-decoration: none;
				color: #222;
				font-size: 0.8rem;
			}
		}
	}
	.MuiFormControl-root {
		width: 100%;
		margin-bottom: 20px;
	}
	.footer-select-wrapper {
		padding-right: 20px;
	}
`;
export const FooterBottomWrapper = styled(Grid)`
	padding: 20px 0;
	margin-top: 15px;
	ul {
		text-align: right;
		margin: 0px;
		padding: 0;
		li {
			list-style: none;
			display: inline-block;
			margin-left: 20px;
		}
	}
`;
