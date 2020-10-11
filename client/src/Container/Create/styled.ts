import styled from 'styled-components';

export const CreateFormWrapper = styled.div`
	.MuiFormControl-root {
		width: 100%;
	}
	p.title {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 20px;
		text-align: center;
	}
	.upformtime {
		position: relative;
		.date-range-picker-container {
			position: absolute;
			width: auto;
			top: 100%;
			left: 0;
		}
		.picker-wrapper div {
			justify-content: space-evenly !important;
			button {
				width: 36px !important;
			}
		}
	}
	button.submit-btn {
		margin-bottom: 80px;
	}
	.provide-image-title {
		margin-top: 20px;
		margin-bottom: 10px;
		font-weight: bold;
	}
`;
