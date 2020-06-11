import styled from "styled-components";
import media from "styled-media-query";

export const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${({ dark }) => (dark ? "#575656" : "#eee")};
  height: 230px;
  width: 100%;

  ${media.lessThan("small")`
    flex-direction: column;

    height: 400px;
  `}

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 50%;
    

    ${media.lessThan("small")`
      width: 90%;
    `}

    h3 {
      font-size: 36px;
      margin-bottom: 8px;
    }
    p {
      font-size: 16px;
      text-align: justify;
      color: ${({ dark }) => (dark ? "#D1CCCC" : "#575656")};
    }
  }
`;
