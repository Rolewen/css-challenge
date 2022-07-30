import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Wrapper, Content as SharedContent } from "../../share-styled";
import "./fonts/Open+Sans:600,300.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const show = keyframes`
	from {
		transform: translate3d(0,50px,0);
		opacity: 0;
	}
	to {
		transform: translate3d(0,0,0);
		opacity: 1;
	}
`;

const showSearch = keyframes`
	from {
		transform: translate3d(50px,0,0) translate(0, -50%);
		opacity: 0;
	}
	to {
		transform: translate(0, -50%);
		opacity: 1;
	}
`;

const hideSearch = keyframes`
	from {
		transform: translate(0, -50%);
		opacity: 1;
	}
	to {
		transform: translate3d(80px,0,0) translate(0, -50%);
		opacity: 0;
		display:none;
		pointer-events:none;
	}
`;

const Content = styled(SharedContent)`
	font-family: "Open Sans", Helvetica, sans-serif;
	background: #264057;
	position: relative;
	overflow: hidden;

	.main {
		height: 280px;
		width: 280px;
		background: #fff;
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 3px;
		transition: all 0.5s linear;

		&.active {
			transform: translate(-10%, -50%);
		}

		.header {
			position: relative;
			display: block;
			text-align: center;
			border-radius: 3px 3px 0 0;
			width: 100%;
			height: 60px;
			background: #5f98cd;

			.nav-btn {
				height: 60px;
				width: 60px;
				position: absolute;
				cursor: pointer;
				.icon {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);

					> :first-child {
						display: flex;
						> :first-child {
							width: 20px;
							height: 3px;
							background: #b2daff;
							border-radius: 3px;
							margin: auto;
						}

						> :nth-child(2) {
							width: 7px;
							height: 7px;
							background: #b2daff;
							border-radius: 50%;
							margin-left: 2px;
						}
					}

					> :last-child {
						width: 28px;
						height: 3px;
						background: #b2daff;
						border-radius: 3px;
						margin-top: 5px;
					}
				}
			}

			.title {
				text-align: center;
				display: block;
				color: #fff;
				line-height: 60px;
				font-size: 15px;
				font-weight: 600;
			}

			> button {
				cursor: pointer;
				position: absolute;
				top: 0%;
				right: 0%;
				height: 60px;
				width: 60px;
				border-radius: 0 3px 0 0;
			}

			.search-input {
				display: none;

				background: #fff;
				top: 0;
				position: absolute;
				top: 50%;
				left: 4%;
				transform: translate(0, -50%);
				width: 200px;
				height: 34px;
				justify-content: center;
				border-radius: 18px;

				input {
					border: none;
					outline: none;
					width: 160px;
					color: #666;
					font-size: 13px;
					font-family: sans-serif;
				}

				&.hide {
					display: flex;
					animation: ${hideSearch} 0.7s forwards;
				}

				&.active {
					display: flex;
					animation: ${showSearch} 0.7s forwards;
				}
			}
		}

		.content {
			position: relative;
			height: 220px;
			.line {
				height: 220px;
				width: 2px;
				position: absolute;
				left: 27px;
				background: #ebebeb;
				top: -20px;
			}

			.notification {
				margin-left: 23px;
				margin-top: 20px;
				position: relative;
				text-align: left;
				animation: ${show} 0.7s forwards;

				span,
				p {
					color: #666666;
					margin: 0 5px 0 20px;
				}

				.circle {
					position: absolute;
					border: 2px solid #5f98cd;
					border-radius: 50%;
					height: 10px;
					width: 10px;
					box-shadow: 0 0 0 3px #fff;
					background: #fff;
				}

				span {
					font-size: 11px;
				}

				p {
					text-align: left;
					font-size: 15px;
					line-height: 22px;
					margin-top: 2px;

					b {
						font-weight: 600;
					}
				}
			}
		}
	}

	.menu {
		width: 120px;
		background: #43627d;
		position: absolute;
		top: 50%;
		transform: translate(100%, -50%);
		border-radius: 3px 0 0 3px;
		padding: 10px 0;
		transition: all 0.5s ease-in;

		&.active {
			transform: translate(30%, -50%);
		}

		ul {
			li {
				cursor: pointer;
				line-height: 20px;
				color: #93b2cd;
				padding: 10px;
				font-size: 14px;

				&:hover {
					color: #fff;
					background: #385269;
				}
			}
		}
	}
`;

export const Day04 = () => {
	const [state, setState] = useState(false);
	const [search, setSearch] = useState<boolean | null>(null);

	return (
		<Wrapper>
			<Content>
				<div className={`menu${state ? " active" : ""}`}>
					<ul>
						<li>Dashboard</li>
						<li>Profile</li>
						<li>Notifications</li>
						<li>Messages</li>
						<li>Settings</li>
					</ul>
				</div>
				<div className={`main${state ? " active" : ""}`}>
					<div className="header">
						<div
							className="nav-btn"
							onClick={() => setState(prev => !prev)}>
							<div className="icon">
								<div>
									<div />
									<div />
								</div>
								<div className="line" />
							</div>
						</div>
						<span className="title">Notifications</span>
						<button
							onClick={() =>
								setSearch(prev => (prev ? false : true))
							}>
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								size="lg"
								color="#fff"
							/>
						</button>
						<div
							className={`search-input ${
								search
									? "active"
									: search === false
									? "hide"
									: ""
							}`}>
							<input placeholder="Search..." />
						</div>
					</div>
					<div className="content">
						<div className="line" />
						<div className="notification">
							<div className="circle" />
							<span>2:01 AM</span>
							<p>
								<b>Freja The Cat</b> likes your photo.
							</p>
						</div>
						<div className="notification">
							<div className="circle" />
							<span>7:16 AM</span>
							<p>
								<b>Hugo Mak</b> posted a photo on your wall.
							</p>
						</div>
						<div className="notification">
							<div className="circle" />
							<span>5:01 PM</span>
							<p>
								<b>BB</b> send you a message.
							</p>
						</div>
					</div>
				</div>
			</Content>
			<div className="desc">
				<h3>Day 004</h3>
			</div>
		</Wrapper>
	);
};
