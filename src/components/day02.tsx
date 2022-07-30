import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

/**
 * keyframes,
 * translate3d,
 * cubic-bezier
 */

const line1 = keyframes`
	0% { 
		transform: translate3d(0, 0, 0) rotate(0deg);
	}
 	
	50% {
		transform: translate3d(0, 22px, 0) rotate(0);
	}

 	100% {
		transform: translate3d(0, 22px, 0) rotate(45deg);
	}
`;

const line2 = keyframes`
	0% {
		transform: scale(1);
		opacity: 1;
	}
	100% {
		transform: scale(0);
		opacity: 0;
	}
`;

const line3 = keyframes`
	0% { 
		transform: translate3d(0, 0, 0) rotate(0deg);
	}
 	
	50% {
		transform: translate3d(0, -22px, 0) rotate(0);
	}

 	100% {
		transform: translate3d(0, -22px, 0) rotate(135deg);
	}
`;

const line1Rev = keyframes`
	0% {
		transform: translate3d(0, 22px, 0) rotate(45deg);
	}

	50%{
		transform: translate3d(0, 22px, 0) rotate(0deg);
	}

	100% {
		transform: translate(0, 0, 0) rotate(0);
	}
`;

const line2Rev = keyframes`
	0% {
		transform: scale(0);
		opacity: 0;
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
`;

const line3Rev = keyframes`
	0% {
		transform: translate3d(0, -22px, 0) rotate(135deg);
	}

	50%{
		transform: translate3d(0, -22px, 0) rotate(0deg);
	}

	100% {
		transform: translate(0, 0, 0) rotate(0);
	}
`;

const Content = styled(SharedContent)`
	> div:first-child {
		background: #3faf82;
		position: relative;
		height: 360px;
		width: 360px;
		margin: 0 auto;
		border-radius: 8px;
		box-shadow: 3px 3px 5px rgb(0 0 0 / 30%);
	}

	.center {
		top: 50%;
		left: 50%;
		width: 80px;
		position: absolute;
		transform: translate(-50%, -50%);
		cursor: pointer;

		> div {
			margin: 0 auto;
			background: #fff;
			height: 8px;
			width: 100%;
			position: relative;
			border-radius: 4px;
			box-shadow: 0 2px 10px 0 rgb(0 0 0 /30%);
		}

		> :first-child {
			animation: ${line1Rev} 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
		}

		> :nth-child(2) {
			margin: 14px auto;
			animation: ${line2Rev} 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
		}

		> :last-child {
			animation: ${line3Rev} 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
		}

		&.no-animation {
			> div {
				animation: none;
			}
		}

		&.active {
			> :first-child {
				animation: ${line1} 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
			}

			> :nth-child(2) {
				animation: ${line2} 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
			}

			> :last-child {
				animation: ${line3} 0.7s cubic-bezier(0.3, 1, 0.7, 1) forwards;
			}
		}
	}
`;

export const Day02 = () => {
	const [state, setState] = useState<"no-animation" | "active" | "">(
		"no-animation"
	);
	return (
		<Wrapper>
			<Content>
				<div>
					<div
						className={`center ${state}`}
						onClick={() =>
							setState(prev =>
								prev === "no-animation" || prev === ""
									? "active"
									: ""
							)
						}>
						<div />
						<div />
						<div />
					</div>
				</div>
			</Content>
			<div className="desc">
				<h3>Day 002</h3>
			</div>
		</Wrapper>
	);
};
