import styled from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

const Content = styled(SharedContent)`
	background: #3faf82;
`;

export const Day01 = () => {
	return (
		<Wrapper>
			<Content></Content>
		</Wrapper>
	);
};
