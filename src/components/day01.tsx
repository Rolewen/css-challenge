import styled from "styled-components";
import { Wrapper, Content as SharedContent } from "../share-styled";

const Content = styled(SharedContent)`
	background: linear-gradient(45deg, #43389f, #4ec6ca);

	> div {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.hundred {
		display: flex;
		position: relative;
		justify-content: center;
		.one-one {
			background: #fff;
			width: 20px;
			height: 40px;
			border-radius: 5px;
			box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
			transform: rotate(50deg);
			top: 0;
			left: 6px;
			position: relative;
		}
		.one-two {
			background: #fff;
			width: 20px;
			height: 100px;
			border-radius: 5px;
			box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
			top: 0;
			position: relative;
			z-index: 3;
		}
		.zero-one {
			height: 100px;
			width: 100px;
			border: 20px solid #fff;
			border-radius: 50%;
			top: 0;
			position: relative;
			left: -6px;
			box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
			z-index: 2;
		}
		.zero-two {
			height: 100px;
			width: 100px;
			border: 20px solid #fff;
			border-radius: 50%;
			top: 0;
			position: relative;
			left: -18px;
			box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
			box-sizing: border-box;
			z-index: 1;
		}
	}

	span {
		display: block;
		text-transform: uppercase;
		font-family: "Courier New", "Courier", sans-serif;
		color: #fff;
	}

	.big {
		font-size: 84px;
		font-weight: 700;
		line-height: 72px;
	}

	.small {
		font-size: 16px;
		font-size: 26px;
		font-weight: 550;
		line-height: 10px;
	}
`;

export const Day01 = () => {
	return (
		<Wrapper>
			<Content>
				<div>
					<div className="hundred">
						<div className="one-one" />
						<div className="one-two" />
						<div className="zero-one" />
						<div className="zero-two" />
					</div>
					<span className="big">Days</span>
					<span className="small">CSS Challenge</span>
				</div>
			</Content>
		</Wrapper>
	);
};
