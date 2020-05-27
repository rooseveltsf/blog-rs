import styled from "styled-components"

export const Container = styled.div`
  /* color: ${props => props.theme.primary}; */
  /* background-color: ${props => props.theme.background}; */
  height: 100%;

  h2 {
    margin-top: 64px;
    /* margin-bottom: 100px; */
    text-align: center;
    font-size: 36px;
    font-weight: bold;
  }
`

export const ContainerInfo = styled.div`
  margin: 54px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Info = styled.div`
  width: 50%;
  margin-left: 54px;

  h3 {
    font-size: 36px;
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    color: #575656;
    text-align: justify;
  }
`
