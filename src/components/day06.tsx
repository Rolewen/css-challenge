import { useState } from "react";
import styled from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

const Content = styled(SharedContent)`
	background: #5ca4ea;
	> div {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 260px;
		background: #fff;
		border-radius: 2px;
		padding: 5px 0px;

		input {
			border: none;
			outline: none;
			background: #fff;
			width: 240px;
			padding: 12px 0;
			color: #4d8dcb;
			::placeholder {
				color: #a4b9ce;
			}
		}

		ul {
			border-top: 1px solid #5ca4ea;
			li {
				margin: 1rem 0;
				color: #6e6e6e;
				padding: 10px;
				text-align: left;
				&:hover {
					color: #4d8dcb;
				}
				cursor: pointer;
				> span {
					font-weight: 600;
				}
			}
		}
	}
`;

export const Day06 = () => {
	const [value, setValue] = useState("");
	return (
		<Wrapper>
			<Content>
				<div>
					<input
						placeholder="Starting Typing..."
						value={value}
						onChange={e => {
							setValue(e.target.value);
						}}
					/>
					{value && (
						<ul>
							<li>
								<span>{value}</span>, hello!
							</li>
							<li>
								Create the <span>{value}</span>
							</li>
						</ul>
					)}
				</div>
			</Content>
			<div className="desc">
				<h3>Day 006</h3>
			</div>
		</Wrapper>
	);
};
