import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const HeaderLayoutLeft = styled.div`
	ul {
		text-align: left !important;
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
