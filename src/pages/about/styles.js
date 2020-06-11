import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  height: 100%;
  width: 100%;


  h2 {
    margin-top: 64px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;

    ${media.lessThan("small")`
      font-size: 28px;
      margin-top: 54px;
    `}
  }
`;
