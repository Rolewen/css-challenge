import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

const up = keyframes`
	0%, 20% {
		top: 0;
	}
	25%,45% {
		top: -45px;
	}
	50%,70% {
		top: -90px;
	}
	75%,95% {
		top: -135px;
	}
	100% {
		top:-180px;
	}
`;

const Content = styled(SharedContent)`
	background: #f39c12;
	> div {
		color: #fff;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: relative;
		width: 260px;
		display: flex;
		justify-content: center;
		height: 45px;
		overflow: hidden;
		font-size: 30px;
		text-shadow: 3px 3px 3px rgb(0 0 0 / 30%);

		ul {
			text-align: left;
			margin-left: 2rem;
			position: relative;
			animation: ${up} 8s ease-in-out infinite;
			li {
				height: 45px;
			}
		}
	}
`;

export const Day07 = () => {
	return (
		<Wrapper>
			<Content>
				<div>
					I'm a
					<ul>
						<li>Jaguar</li>
						<li>Cat</li>
						<li>Tiger</li>
						<li>Leopard</li>
					</ul>
				</div>
			</Content>
			<div className="desc">
				<h3>Day 007</h3>
			</div>
		</Wrapper>
	);
};
