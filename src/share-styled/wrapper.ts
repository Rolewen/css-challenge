import styled from "styled-components";

export const Wrapper = styled.div`
	min-width: 50%;
	text-align: center;
	margin-top: 3rem;
	margin-bottom: 5rem;

	@media (max-width: 768px) {
		min-width: 100%;
	}

	> .desc {
		h3 {
			text-align: center;
			margin-top: 1.5rem;
			font-size: 16px;
		}
	}
`;
