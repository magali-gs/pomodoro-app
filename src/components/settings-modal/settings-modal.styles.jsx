import styled from "styled-components";

export const SettingsForm = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 33.75rem;
	background-color: #ffffff;
	border-radius: 25px;
	z-index: 2;
	button {
		align-self: center;
		bottom: -1.5rem;
		position: relative;
		opacity: 1;
		color: #fff;
		transition: 0.2s all ease;
		&:hover {
			opacity: 0.8;
			transition: 0.2s all ease;
		}
	}
`;

export const SettingsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
	p {
		color: #161932;
		font-size: 1.75rem;
		font-weight: 700;
	}
	svg {
		cursor: pointer;
	}
`;

export const SettingsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	border-top: 1px solid #e3e1e1;
	.settings-options {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 40px;
		&:first-of-type {
			padding-top: 24px;
		}
		p {
			font-size: 0.813rem;
			line-height: 0.813rem;
			letter-spacing: 5px;
			color: #161932;
		}
		.options {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			.option {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 2.625rem;
				height: 2.5rem;
				border-radius: 50%;
				border: 2px solid #ffffff;
				cursor: pointer;
				background-color: #eff1fa;
				&:hover {
					outline: 1px solid #eff1fa;
				}
			}
		}
	}
	.color .options .option {
		&:first-of-type {
			background-color: #f87070;
		}
		&:nth-of-type(2) {
			background-color: #70f3f8;
		}
		&:nth-of-type(3) {
			background-color: #d881f8;
		}
	}
	.font .options .option {
		color: #1e213f;
		font-size: 0.938rem;
		&:first-of-type {
			font-family: "Kumbh Sans";
			font-weight: bold;
		}
		&:nth-of-type(2) {
			font-family: "Roboto Slab";
			font-weight: normal;
		}
		&:nth-of-type(3) {
			font-family: "Space Mono";
			font-weight: bold;
		}
		&.active {
			background-color: #161932;
			color: #fff;
		}
	}
	.time {
		flex-direction: column;
		align-items: flex-start;
		gap: 22px;
		.time-imputs {
			width: 100%;
			display: flex;
			justify-content: space-between;
			input[type="number"] {
				width: 8.75rem;
				margin-top: 8px;
				background: #eff1fa;
				border-radius: 10px;
				border: none;
				color: #1e213f;
				font-weight: bold;
				padding: 15px;
				font-size: 0.875rem;
                color: #1e213f;
			}
			label {
                font-size: 0.75rem;
				color: #1e213f;
				opacity: 0.4;
                font-weight: bold;
			}
		}
	}
`;
