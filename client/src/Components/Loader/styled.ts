import styled from 'styled-components';

export const LoaderImage = styled.div`
	position: absolute;
	background: rgb(255 255 255 / 57%);
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 11111;
	display: flex;
	justify-content: center;
	align-items: center;
	.load-wrapp:last-child {
		margin-right: 0;
	}
	.line {
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 15px;
		background-color: #00a799;
	}

	.load-3 .line:nth-last-child(1) {
		animation: loadingC 0.6s 0.1s linear infinite;
	}
	.load-3 .line:nth-last-child(2) {
		animation: loadingC 0.6s 0.2s linear infinite;
	}
	.load-3 .line:nth-last-child(3) {
		animation: loadingC 0.6s 0.3s linear infinite;
	}

	@keyframes loadingC {
		0 {
			transform: translate(0, 0);
		}
		50% {
			transform: translate(0, 15px);
		}
		100% {
			transform: translate(0, 0);
		}
	}
`;
