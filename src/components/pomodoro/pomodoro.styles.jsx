import styled from "styled-components";

export const PomodoroContainer = styled.div`
	width: 25.625rem;
	height: 25.625rem;
	padding: 22px;
	border-radius: 50%;
	background: linear-gradient(315deg, #2e325a 0%, #0e112a 100%);
	box-shadow: -50px -50px 100px #272c5a, 50px 50px 100px #121530;

`;

export const PomodoroInnerContainer = styled.div`
	width: 22.875rem;
	height: 22.875rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background: #161932;
`;
export const ProgressBarOuter = styled.div`
	width: 21.188rem;
	height: 21.188rem;
	border-radius: 50%;
	background: orange;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const ProgressBarInner = styled.div`
	position: relative;
	width: 19.5em;
	height: 19.5rem;
	border-radius: 50%;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TimerContainer = styled.h1`
	font-size: 6.25rem;
	line-height: 101px;
	text-align: center;
	letter-spacing: -5px;
`;

export const ActionContainer = styled.p`
	font-size: 1rem;
	line-height: 16px;
	text-align: center;
	letter-spacing: 15px;
`;
