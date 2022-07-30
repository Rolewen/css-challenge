import styled from "styled-components";
import { Wrapper, Content as SharedContent } from "../../share-styled";
import "./fonts/Open+Sans:600,300.css";
import Cat from "./img/cat.jpg";

const brown = "#786450";

const Content = styled(SharedContent)`
	font-family: "Open Sans", Helvetica, sans-serif;

	background: linear-gradient(45deg, #eebe6c, #ca7c4e);

	button,
	span {
		-webkit-font-smoothing: antialiased;
		display: block;
		color: ${brown};
	}

	> div {
		height: 300px;
		width: 320px;
		border-radius: 5px;

		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: flex;
	}

	.profile {
		width: 200px;
		height: 100%;
		background: #fff;
		border-radius: 5px 0 0 5px;
		text-align: center;

		.avator {
			position: relative;
			margin: 30px auto 0 auto;

			.circle {
				position: absolute;
				border: 1px solid;
				border-radius: 50%;
				box-sizing: border-box;
				left: 50%;
				transform: translate(-50%, 0);
				cursor: pointer;
				transition: all 1.5s ease-in-out;
			}

			&:hover {
				.circle.first {
					transform: translate(-50%, 0) rotate(360deg);
				}

				.circle.second {
					transform: translate(-50%, 0) rotate(-360deg);
				}
			}

			.circle.first {
				width: 76px;
				height: 76px;
				top: -3px;
				border-color: ${brown} ${brown} ${brown} transparent;
			}

			.circle.second {
				width: 82px;
				height: 82px;
				top: -6px;
				border-color: ${brown} transparent ${brown} ${brown};
			}

			img {
				border-radius: 50%;
			}
		}

		.avator + span {
			font-size: 18px;
			font-weight: 600;
			margin-top: 12px;
		}

		.avator + span + span {
			font-size: 11px;
			line-height: 26px;
		}

		.btn-group {
			position: relative;
			margin-top: 24px;
			button {
				cursor: pointer;
				margin: 12px auto;
				line-height: 2;
				border: 1px solid ${brown};
				width: 120px;
				border-radius: 24px;
				transition: all 0.4s ease-in-out;

				&:hover {
					background: ${brown};
					color: #fff;
				}
			}
		}
	}

	.info {
		width: 120px;
		height: 100%;
		background: #f5e8df;
		border-radius: 0 5px 5px 0;

		> div {
			height: 100px;
			position: relative;
			padding-top: 25%;
			transition: all 0.4s ease-in-out;

			:not(:last-child) {
				border-bottom: 1px solid #fff;
			}

			span {
				line-height: 1.15;

				:first-child {
					font-size: 18px;
					font-weight: 800;
				}

				:last-child {
					font-size: 11px;
				}
			}

			&:hover {
				background: #e1cfc2;
				cursor: pointer;

				:first-child {
					border-radius: 0 5px 0 0;
				}

				:last-child {
					border-radius: 0 0 5px 0;
				}
			}
		}
	}
`;

export const Day03 = () => {
	return (
		<Wrapper>
			<Content>
				<div>
					<div className="profile">
						<div className="avator">
							<div className="circle first" />
							<div className="circle second" />
							<img
								src={Cat}
								width="70px"
								height="70px"
								alt="Hugo the cat"
							/>
						</div>
						<span>Hugo Mak</span>
						<span>British Shorthair</span>
						<div className="btn-group">
							<button>Follow</button>
							<button>Message</button>
						</div>
					</div>
					<div className="info">
						<div>
							<span>523</span>
							<span>Posts</span>
						</div>
						<div>
							<span>1387</span>
							<span>Likes</span>
						</div>
						<div>
							<span>146</span>
							<span>Follower</span>
						</div>
					</div>
				</div>
			</Content>
			<div className="desc">
				<h3>Day 003</h3>
			</div>
		</Wrapper>
	);
};
