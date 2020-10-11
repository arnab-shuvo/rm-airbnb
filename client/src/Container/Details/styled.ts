import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const DetailWrapper = styled(Grid)`
	.property{
		&-summary {
			&-title {
				font-size: 1.4rem;
				font-weight: bold;
				margin-bottom: 10px;
				i {
					&:before {
						margin-left: 10px;
						margin-right: 0;
						font-size: 20px;
					}
					color: #f5c150;
				}
			}
			&-subtitle {
				font-size: 1.1rem;
				margin-bottom: 10px;
			}
			img {
				margin-bottom 20px;
			}
		}
		&-des{
			&-title{
				font-size: 2rem;
				font-weight: bold;
			}
			&-lcoation{
				font-size: 1.2rem;
				margin-bottom: 20px;
			}
			img{
				width: 100%;

			}
			&-user{
				text-align :center;
			}
		}
		&-info{
			&-title{
				i{
					font-weight: normal;
				}
				
				font-size: 1.2rem;
			}
			&-des{
				margin-left: 42px;
				margin-bottom: 20px;
				margin-top: 5px;
				span{
					margin-right: 20px
				}
			}
		}
		&-features{
			padding: 30px 0;
			border-top: 1px solid #cdcdcd;
			&-title{
				font-size: 1.2rem;
			}
			&-des{
				font-size: 1.1rem;
				margin: 5px 0;
			}
		}
		&-reviews{
			.title{
				font-size: 1.3rem;
				font-weight :bold;
				border-top: 1px solid #cdcdcd;
				padding-top: 30px;
				margin-bottom: 10px;
			}
			&-block{
				img{
					width: 100%;

				}
				border-top: 1px dashed #f1f1f1;
				padding: 20px 0;
			}
			margin-bottom: 40px;
		}

		&-operation{
			margin-bottom: 20px;
			padding: 30px;
			border: 1px solid #cdcdcd;
			border-radius: 5px;
			&-price{
				font-weight: bold;
				span{
					font-size: 1.2rem;
					
				}
				margin-bottom: 5px;
			}
			&-rating{
				i{
					color: #00a799;
				}
				span{
					font-weight: bold;
				}
				margin-bottom: 10px;
			}
			&-date{
				margin-bottom: 5px;
				&-wrapper{
					input{
						width: 100%;
						padding: 10px 20px;
						box-sizing: border-box;
						text-align: center;
						font-size: 1.5rem;
						color: #dbdbdb;
						margin-bottom: 20px;
					}
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
			}
			button.submit-btn{
				background-color: rgb(255, 90, 95);
				width : 100%;
				padding: 10px ;
				font-size: 1.2rem
			}
			.comment-title{
				font-size: 1.2rem;
				font-weight: bold;
				margin-bottom: 20px;
			}
		}
	}
	.MuiFormControl-root{
		width: 100%;
	}
`;

export const PropertyImageWrapper = styled(Grid)`
	margin-bottom: 80px !important;
`;
export const PropertyImage = styled(Grid)`
	background-image: url(${(props: IPropertyImage) => props.bg});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: ${(props: IPropertyImage) => props.height}px;
	border: 1px solid #333;
`;
