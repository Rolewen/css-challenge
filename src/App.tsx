import styled, { css } from "styled-components";
import { ResetStyle, GlobalStyle } from "../src/components/globalStyle";

const colorGrey = css`
	color: rgba(75, 85, 99, 1);
`;

const colorBlue = css`
	color: rgba(79, 70, 229, 1);
`;

const Main = styled.main`
	.text-blue {
		${colorBlue}
	}
`;

const HeaderDesc = styled.div`
	display: flex;

	margin: 2rem 2rem;

	> :first-child {
		width: 60%;
		padding: 1rem 2rem;
		h1 {
			display: grid;
			span {
				font-weight: 600;
			}
			> span:first-child {
				${colorGrey}
				line-height: 1.8;
				font-size: 16px;
			}
			> span:last-child {
				line-height: 1.2;
				font-size: 3.75rem;
			}
		}

		P {
			${colorGrey}
			line-height:1.5;
			font-weight: 500;
			margin: 1.5rem 0;
			font-size: 16px;
		}
	}

	> :last-child {
		width: 40%;
		padding: 1rem 1rem;
		.panel {
			background: #404040;
			width: 360px;
			height: 250px;
			border-radius: 10px;
			.header {
				display: flex;
				vertical-align: middle;
				height: 40px;
				border-bottom: 1px solid #535353;
				padding-left: 1rem;
				.circle {
					margin: auto 0 auto 10px;
					height: 12px;
					width: 12px;
					border-radius: 50%;
					border: 2px solid;
				}

				.border-green {
					border-color: rgba(74, 222, 128, 1);
				}

				.border-yellow {
					border-color: rgba(251, 191, 36, 1);
				}

				.border-red {
					border-color: rgba(239, 68, 68, 1);
				}
			}
			.content {
				display: flex;
				margin-top: 1rem;
				> :first-child {
					opacity: 0.5;
					color: #c0c0c0;
					word-break: break-all;
					width: 18px;
					text-align: right;
					line-height: 1.5;
					margin-left: 1rem;
				}

				> :last-child {
				}
			}
		}
	}

	@media (max-width: 768px) {
		display: block;
		> :first-child,
		> :last-child {
			width: 100%;
		}

		> :last-child {
			.panel {
				margin: 0 auto;
			}
		}
	}
`;

function App() {
	return (
		<div>
			<ResetStyle />
			<GlobalStyle />
			<Main>
				<HeaderDesc>
					<div>
						<h1>
							<span>100 Days CSS Challenge</span>
							<span>
								What is <span className="text-blue">this?</span>
							</span>
						</h1>
						<p>
							For 100 consecutive days, I've written HTML and CSS
							snippets as a creative learning process for myself.
						</p>
						<p>
							I used <span className="text-blue">VSCode</span> to
							write and save my code every day on this website.
						</p>
						<p>
							After accomplishing my project on day 100, I've
							rewritten the website to let everyone else also join
							my challenge.
						</p>
					</div>
					<div>
						<div className="panel">
							<div className="header">
								<div className="circle border-red"></div>
								<div className="circle border-yellow"></div>
								<div className="circle border-green"></div>
							</div>
							<div className="content">
								<div>1 2 3 4 5 6 7 8 9 10</div>
								<code>
									{`
										for (let day=1; day<=100; day++){
											
										}
									`}
								</code>
							</div>
						</div>
					</div>
				</HeaderDesc>
			</Main>
		</div>
	);
}

export default App;
