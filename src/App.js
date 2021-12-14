import { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Wrapper from "./components/wrapper/wrapper.component";
import Header from "./components/header.component";
import Buttons from "./components/buttons/buttons.component";
import Pomodoro from "./components/pomodoro/pomodoro.component";
import Settings from "./components/setting/settings.component";
import SettingsModal from "./components/settings-modal/settings-modal.component";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1E213F;
    font-family: ${({ font }) =>
		font === "Kumbh Sans"
			? "Kumbh Sans"
			: font === "Roboto Slab"
			? "Roboto Slab"
			: font === "pace Mono"
			? "Space Mono"
			: "Space Mono"};
    color: #D7E0FF;
    .active {
      background-color: ${({ color }) =>
			color === "#F87070"
				? "#F87070"
				: color === "#70F3F8"
				? "#70F3F8"
				: color === "#D881F8"
				? "#D881F8"
				: "#F87070"};
      color: #1E213F;
      opacity: 1;
    }
  }
`;

function App() {
	const [option, setOption] = useState("pomodoro");
	const [pomodoroTime, setPomodoroTime] = useState(25)
	const [shortBreakTime, setShortBreakTime] = useState(5);
	const [longBreakTime, setLongBreakTime] = useState(15);
	const [themeFont, setThemeFont] = useState("Kumbh Sans");
	const [themeColor, setThemeColor] = useState("#F87070");

	const [settingsVisible, setSettingsVisible] = useState(false);

	const pomodoroOptions = ["pomodoro", "short break", "long break"];

	const handleOption = (option) => {
		setOption(option);
	};
	const handleUpdateSettings = (newColor, newFont) => {
		setThemeColor(newColor);
		setThemeFont(newFont);
		setSettingsVisible(false);
	};

	const toggleSettings = () => {
		setSettingsVisible(!settingsVisible);
	};

	return (
		<Wrapper>
			<GlobalStyle font={themeFont} color={themeColor} />
			<Header />
			<Buttons
				pomodoroOption={option}
				pomodoroOptions={pomodoroOptions}
				handleOption={handleOption}
			/>
			<Pomodoro timer={pomodoroTime} />
			<Settings toggleSettings={toggleSettings} />
			{settingsVisible && (
				<SettingsModal
					toggleSettings={toggleSettings}
					handleUpdateSettings={handleUpdateSettings}
					themeFont={themeFont}
					themeColor={themeColor}
				/>
			)}
		</Wrapper>
	);
}

export default App;
