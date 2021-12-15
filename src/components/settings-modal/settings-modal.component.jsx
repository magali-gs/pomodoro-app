import { useState, useEffect } from "react";
import { ReactComponent as Close } from "../../assets/icon-close.svg";
import CustomButton from "../custom-button/custom-button.component";

import { settings } from "../../assets/settings";

import {
	SettingsForm,
	SettingsHeader,
	SettingsContainer,
} from "./settings-modal.styles";

const SettingsModal = ({
	toggleSettings,
	themeFont,
	themeColor,
	handleUpdateSettings,
	pomodoroOptions,
}) => {
	const [newColor, setNewColor] = useState(themeColor);
	const [newFont, setNewFont] = useState(themeFont);
	const [newPomodoroOptions, setNewPomodoroOptions] =
		useState(pomodoroOptions);

	const handleChangeColor = (color) => {
		setNewColor(color);
	};

	const handleChangeFont = (font) => {
		setNewFont(font);
	};

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setNewPomodoroOptions({ ...newPomodoroOptions, [name]: value });
	};

	const handleSubmit = () => {
		handleUpdateSettings(newColor, newFont, newPomodoroOptions);
	};

	return (
		<SettingsForm>
			<SettingsHeader>
				<p>Settings</p>
				<Close onClick={toggleSettings} />
			</SettingsHeader>
			<SettingsContainer>
				<div className="settings-options time">
					<p>Time (minutes)</p>
					<div className="time-imputs">
						{Object.entries(pomodoroOptions).map(
							([key, value, idx]) => (
								<div key={key}>
									<label htmlFor={key}>{key}</label>
									<input
										type="number"
										defaultValue={value}
										min={0}
										max={60}
										name={key}
										onChange={handleChangeInput}
									></input>
								</div>
							)
						)}
					</div>
				</div>
				<div className="settings-options font">
					<p>Font</p>
					<div className="options">
						{settings.fonts.map((font, idx) => (
							<div
								className={`option ${
									font === newFont ? "active" : undefined
								}`}
								key={idx}
								onClick={() => handleChangeFont(font)}
							>
								Aa
							</div>
						))}
					</div>
				</div>
				<div className="settings-options color">
					<p>Color</p>
					<div className="options">
						{settings.colors.map((color, idx) => (
							<div
								className="option"
								key={idx}
								onClick={() => handleChangeColor(color)}
							>
								{color === newColor && (
									<span
										style={{
											color: "#161932",
											fontSize: "1rem",
										}}
									>
										&#10003;
									</span>
								)}
							</div>
						))}
					</div>
				</div>
			</SettingsContainer>
			<CustomButton
				style={{ backgroundColor: themeColor }}
				onClick={handleSubmit}
			>
				Apply
			</CustomButton>
		</SettingsForm>
	);
};

export default SettingsModal;
