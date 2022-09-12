import styled from "styled-components";
import { Wrapper, Content as SharedContent } from "../../share-styled";
import ICON from "./icon";

const Content = styled(SharedContent)`
	background: linear-gradient(45deg, #3a92af, #5ca05a);
	position: relative;

	> div {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		height: 250px;
		width: 250px;
		position: absolute;
		border-radius: 5px;

		.header {
			color: #676767;
			font-size: 16px;
			line-height: 5rem;
			border-bottom: 1px solid #d8d8d8;
		}

		.content {
			> div:first-child {
				height: 80px;
				width: 100px;
				border: 1px dashed #d8d8d8;
				margin: 3rem auto;
				display: flex;

				> svg {
					margin: auto;
				}

				> input {
					display: none;
				}
			}

			> button {
				background: #6ece3b;
				color: #fff;
				padding: 1rem;
				border-radius: 3px;
				width: 110px;
			}
		}
	}
`;

export const Day08 = () => {
	return (
		<Wrapper>
			<Content>
				<div>
					<div className="header">Drop file to upload</div>
					<div className="content">
						<div>
							<ICON />
							<input type="file" />
						</div>
						<button type="submit">Upload file</button>
					</div>
				</div>
			</Content>
			<div className="desc">
				<h3>Day 008</h3>
			</div>
		</Wrapper>
	);
};
