import styled from "styled-components"

export const Container = styled.div`
  margin: 54px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerInfo = styled.div`
  width: 50%;
  margin-left: 54px;

  h3 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    color: ${({ dark }) => (dark ? "#D1CCCC" : "#575656")};
    text-align: justify;
  }
`
