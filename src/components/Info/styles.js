import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  margin: 54px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.lessThan("small")`
    flex-direction: column;
  `}
`;

export const ContainerInfo = styled.div`
  width: 50%;
  margin-left: 54px;

  ${media.lessThan("small")`
    width: 90%;
    margin-left: 0;

    h3 {
      text-align: center;
      margin-top: 20px;
    }
  `}

  h3 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    color: ${({ dark }) => (dark ? "#D1CCCC" : "#575656")};
    text-align: justify;
  }
`;
