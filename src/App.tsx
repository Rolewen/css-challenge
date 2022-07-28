import styled, { css } from "styled-components";
import { ResetStyle, GlobalStyle } from "../src/components/globalStyle";
import { Day01 } from "./components/day01";

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

	.title {
		${colorGrey}
		font-weight: 700;
		font-size: 16px;
		text-align: center;
		margin: 6rem 0 4rem 0;
	}
	margin-bottom: 50px;
`;

const HeaderDesc = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 10vw;

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

		@media (max-width: 500px) {
			padding: 0;
		}
		.panel {
			background: #404040;
			width: 360px;
			height: 275px;
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
				line-height: 1.8;
				code {
					white-space: pre-wrap;
					color: white;
					letter-spacing: 1px;
				}

				> :first-child {
					margin-left: 1rem;
					opacity: 0.5;
					color: #c0c0c0;
					width: 18px;
					text-align: right;
				}

				> :last-child {
					margin-left: 2rem;
					width: calc(100% - 18px);
				}

				.green {
					color: #a7e22e;
				}

				.red {
					color: #f92572;
				}

				.purple {
					color: #ae81ff;
				}

				.blue {
					color: #65d9ef;
				}

				.space-2 {
					margin-left: 2rem;
				}

				.space-4 {
					margin-left: 4rem;
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

	@media (max-width: 500px) {
		margin: 2rem 0;
	}
`;

const Content = styled.div`
	margin: 2rem 10vw;
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 500px) {
		margin: 2rem 0;
	}
`;

function App() {
	return (
		<>
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
								<div>{`
									1
									2
									3
									4
									5
									6
									7
									8
									9
									10
								`}</div>
								<code>
									<span className="red">for </span>
									<span className="purple">(</span>
									<span className="blue">let</span> day
									<span className="red">=</span>1; day
									<span className="red">{`<=`}</span>100; day
									<span className="red">++</span>
									<span className="purple">{`) {`}</span>
									<br />
									<span className="space-2 green">
										getAnIdea
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 green">
										writeHTML
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 green">
										writeStyledComponent
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 green">
										beHappy
									</span>
									<span className="blue">()</span>;
									<br />
									<br />
									<span className="space-2 red">if </span>
									<span className="blue">(</span>
									day
									<span className="red">===</span>
									<span className="purple">100</span>
									<span className="blue">{`) {`}</span>
									<br />
									<span className="space-4 green">
										celebrate
									</span>
									<span className="blue">()</span>;
									<br />
									<span className="space-2 blue">{`}`}</span>
									<br />
									<span className="purple">{`}`}</span>
									<br />
								</code>
							</div>
						</div>
					</div>
				</HeaderDesc>
				<p className="title">My 100 days css challenge</p>
				<Content>
					<Day01 />
				</Content>
			</Main>
		</>
	);
}

export default App;
