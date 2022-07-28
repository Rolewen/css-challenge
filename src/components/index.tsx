import styled from "styled-components";
import { Day01 } from "./day01";
import { Day02 } from "./day02";

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
		<Day02 />
	</Content>
);
