import styled from "styled-components";
import { Day01 } from "./day01";
import { Day02 } from "./day02";
import { Day03 } from "./day03";
import { Day04 } from "./day04";
import { Day05 } from "./day05";
import { Day06 } from "./day06";
import { Day07 } from "./day07";

const Content = styled.div`
	margin: 3rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	> div {
		grid-template-columns: repeat(2, minmax(0, 1fr));
		display: grid;
		gap: 5rem;

		@media (max-width: 900px) {
			grid-template-columns: none;
		}
	}
`;

export default () => (
	<Content>
		<div>
			<Day01 />
			<Day02 />
			<Day03 />
			<Day04 />
			<Day05 />
			<Day06 />
			<Day07 />
		</div>
	</Content>
);
