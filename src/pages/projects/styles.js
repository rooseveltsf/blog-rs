import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  h2 {
    margin-top: 64px;
    margin-bottom: 64px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;

    ${media.lessThan("small")`
      margin-top: 54px;
      margin-bottom: 54px;
      font-size: 28px;
    `}
  }

`;

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `}
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ dark }) => (dark ? "#484848" : "#eee")};
  
  /* padding: 20px; */
  border-radius: 4px;
  width: 45%;
  height: 400px;
  margin-bottom: 50px;

  ${media.lessThan("medium")`
    margin-bottom: 30px;
    width: 90%;
    height: 400px;
  `}

  ${media.lessThan("small")`
    height: 250px;
  `}

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30%;
  
  ${media.lessThan("small")`
    strong {
      font-size: 20px;
    }
  `}

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      font-size: 40px;
      
      ${media.lessThan("small")`
        font-size: 32px;
      `}
    }

    p {
      font-size: 16px;
      color: ${({ dark }) => (dark ? "#D1CCCC" : "#575656")};
    }
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* color: #FFCC57; */
    color: #f27d52;
    border-radius: 4px;
    height: 54px;
    position: relative;
    font-size: 32px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0%;
      height: 3px;
      /* background: #FFCC57; */
      background: #f27d52;
      transition: width 0.3s;
    }
    &:hover::before {
      width: 100%;
    }
  }
`;
