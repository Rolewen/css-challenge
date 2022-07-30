import styled, { keyframes } from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

const circle1 = keyframes`
	0%, 70% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
`;

const circle2 = keyframes`
	0%, 40% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
`;

const circle3 = keyframes`
	0%, 10% {
		transform: scale(0);
	}

	100% {
		transform: scale(1);
	}
`;

const Content = styled(SharedContent)`
	background: #e56262;
	position: relative;
	> div {
		position: absolute;
		border-radius: 50%;
		background: #fff;
		animation-fill-mode: both;

		position: absolute;
	}

	.circle-1 {
		width: 100px;
		height: 100px;
		box-shadow: 8px 10px 8px rgb(0 0 0 / 30%);
		animation: ${circle3} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
			alternate;
		top: 130px;
		left: 130px;
	}

	.circle-2 {
		width: 70px;
		height: 70px;
		box-shadow: 7px 7px 8px rgb(0 0 0 / 30%);
		animation: ${circle2} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
			alternate;
		top: 145px;
		left: 145px;
	}

	.circle-3 {
		width: 40px;
		height: 40px;
		box-shadow: 6px 6px 8px rgb(0 0 0 / 30%);
		animation: ${circle1} 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite
			alternate;

		top: 160px;
		left: 160px;
	}
`;

export const Day05 = () => {
	return (
		<Wrapper>
			<Content>
				<div className="circle-1" />
				<div className="circle-2" />
				<div className="circle-3" />
			</Content>
			<div className="desc">
				<h3>Day 005</h3>
			</div>
		</Wrapper>
	);
};
