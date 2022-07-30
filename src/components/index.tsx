import styled from "styled-components";
import { Day01 } from "./day01";
import { Day02 } from "./day02";
import { Day03 } from "./day03";
import { Day04 } from "./day04";

const Content = styled.div`
	margin: 2rem 8vw;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 900px) {
		margin: 2rem 0;
	}
`;

export default () => (
	<Content>
		<Day01 />
		<Day02 />
		<Day03 />
		<Day04 />
	</Content>
);
