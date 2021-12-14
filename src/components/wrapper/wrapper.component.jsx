import styled from "styled-components";

const WrapperContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	min-height: 90vh;
`;

const Wrapper = ({ children }) => (
	<WrapperContainer>{children}</WrapperContainer>
);

export default Wrapper;
