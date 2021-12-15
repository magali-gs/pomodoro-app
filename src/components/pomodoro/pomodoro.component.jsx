import {
	PomodoroContainer,
	PomodoroInnerContainer,
	TimerContainer,
	ActionContainer,
	ProgressBarOuter,
	ProgressBarInner,
} from "./pomodoro.styles";

const Pomodoro = ({ timer }) => {
	return (
		<PomodoroContainer>
			<PomodoroInnerContainer>
				<ProgressBarOuter>
					<ProgressBarInner>
						<TimerContainer>{timer}:00</TimerContainer>
						<ActionContainer>PAUSE</ActionContainer>
					</ProgressBarInner>
				</ProgressBarOuter>
			</PomodoroInnerContainer>
		</PomodoroContainer>
	);
};

export default Pomodoro;
