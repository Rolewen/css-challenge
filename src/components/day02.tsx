import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

const line1 = keyframes`
 0% { transform: translate3d(0, 0, 0) rotate(0deg); }
 50% {  transform: translate3d(0, 22px, 0) rotate(0); }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Content = styled(SharedContent)`
	background: #3faf82;
	position: relative;

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

		> :nth-child(2) {
			margin: 14px auto;
		}

		&.active {
			> :first-child {
				animation: ${line1} cubic-bezier(0.3, 1, 0.7, 1) forwards;
			}
		}
	}
`;

export const Day02 = () => {
	const [state, setState] = useState(false);
	return (
		<Wrapper>
			<Content>
				<div
					className={`center${state ? " active" : ""}`}
					onClick={() => setState(prev => !prev)}>
					<div />
					<div />
					<div />
				</div>
			</Content>
		</Wrapper>
	);
};
