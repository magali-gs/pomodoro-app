import { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Wrapper from "./components/wrapper/wrapper.component";
import Header from "./components/header.component";
import Buttons from "./components/buttons/buttons.component";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1E213F;
    font-family: ${({ font }) =>
		font === "kumbh"
			? "Kumbh Sans"
			: font === "roboto"
			? "Roboto Slab"
			: font === "space"
			? "Space Mono"
			: "Space Mono"};
    color: #D7E0FF;

    .active {
      background-color: ${({ color }) =>
			color === "salmon"
				? "#F87070"
				: color === "green"
				? "#70F3F8"
				: color === "purple"
				? "#D881F8"
				: "#F87070"};
      color: #1E213F;
      opacity: 1;
    }
  }
`;

function App() {
	const [option, setOption] = useState("pomodoro");
	const [font, setFont] = useState("");
	const [color, setColor] = useState("");

	const pomodoroOptions = ["pomodoro", "short break", "long break"];

	const handleOption = (option) => {
		setOption(option);
	};

	return (
		<Wrapper>
			<GlobalStyle font={font} color={color} />
			<Header />
			<Buttons
				pomodoroOption={option}
				pomodoroOptions={pomodoroOptions}
				handleOption={handleOption}
			/>
		</Wrapper>
	);
}

export default App;
