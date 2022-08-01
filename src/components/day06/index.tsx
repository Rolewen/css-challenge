import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, Content as SharedContent } from "../../share-styled";
import alert from "./img/alert.png";
import "./fonts/Open+Sans:600,300.css";

const show = keyframes`
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.1);
	}
	75% {
		transform: scale(.85);
	}
	100% {
		transform: scale(1);
	}
`;

const hide = keyframes`
	0% {
		transform: scale(1);
	}
	20% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(0);
	}
`;

const Content = styled(SharedContent)`
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #3f3f3f;

	> div {
		position: relative;
		height: 180px;
		width: 260px;
		background: #fff;
		top: 90px;
		left: 50px;
		border-radius: 5px;
		animation: ${show} 0.7s ease-in-out;

		&.hide {
			animation: ${hide} 0.7s ease-in-out forwards;
		}

		img {
			margin: 10px 0;
			width: 44px;
			aspect-ratio: auto 44 / 38;
			height: 38px;
		}

		button {
			cursor: pointer;
			color: #fff;
			background: #f65556;
			border-radius: 0 0 5px 5px;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			line-height: 36px;
		}

		p {
			-webkit-font-smoothing: antialiased;
			color: #415868;
		}

		.title {
			font-size: 18px;
			font-weight: 400;
			line-height: 24px;
		}

		.content {
			padding: 5px 20px;
			font-size: 14px;
			line-height: 16px;
		}
	}
`;

export const Day06 = () => {
	const [state, setState] = useState(false);
	return (
		<Wrapper>
			<Content onClick={() => setState(false)}>
				<div className={state ? "hide" : ""}>
					<img src={alert} alt="alert" />
					<p className="title">Oops!</p>
					<p className="content">
						An error has occurred while creating an error report.
					</p>
					<button
						onClick={e => {
							e.stopPropagation();
							setState(prev => !prev);
						}}>
						Dismiss
					</button>
				</div>
			</Content>
			<div className="desc">
				<h3>Day 006</h3>
			</div>
		</Wrapper>
	);
};
