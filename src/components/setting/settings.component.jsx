import { ReactComponent as Icon } from "../../assets/icon-settings.svg";
import styled from "styled-components";

const SettingsIcon = styled(Icon)`
	cursor: pointer;
	&:hover > path {
		opacity: 1;
	}
`;

const Settings = ({ toggleSettings }) => {
	return <SettingsIcon onClick={toggleSettings} />;
};

export default Settings;
