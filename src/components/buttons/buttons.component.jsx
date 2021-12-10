import CustomButton from "../custom-button/custom-button.component";

import styled from "styled-components";

const ButtonsContainer = styled.div`
	display: flex;
	background: #161932;
	padding: 8px;
	border-radius: 31.5px;
`;

const Buttons = ({ pomodoroOptions, handleOption, pomodoroOption }) => {
	return (
		<ButtonsContainer>
			{pomodoroOptions.map((option, idx) => (
				<CustomButton
					className={pomodoroOption === option ? 'active' : undefined}
					key={idx}
					onClick={() => handleOption(option)}
				>
					{option}
				</CustomButton>
			))}
		</ButtonsContainer>
	);
};

export default Buttons;
