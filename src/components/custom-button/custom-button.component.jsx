import { ButtonSytled } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
	<ButtonSytled {...props}>{children}</ButtonSytled>
);

export default CustomButton;
