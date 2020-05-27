import styled from "styled-components"

export const Tech = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${({ dark }) => (dark ? "#575656" : "#eee")};
  height: 230px;
  /* border-radius: 4px; */

  /* background: blue; */

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    width: 50%;
    /* margin-left: 80px; */

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
`
