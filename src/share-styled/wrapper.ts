import styled from "styled-components";

export const Wrapper = styled.div`
	min-width: 50%;
	text-align: center;

	@media (max-width: 768px) {
		min-width: 100%;
	}

	> .desc {
		h3 {
			text-align: center;
			margin-top: 1.5rem;
			font-size: 16px;
			color: rgba(75, 85, 99, 1);
		}
	}
`;
