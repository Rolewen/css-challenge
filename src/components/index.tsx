import styled from "styled-components";
import { Day01 } from "./day01";

const Content = styled.div`
	margin: 2rem 10vw;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 500px) {
		margin: 2rem 0;
	}
`;

export default () => (
	<Content>
		<Day01 />
	</Content>
);
