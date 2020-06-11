import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => (props.dark ? "#3B3B3B" : "#f7f7f7")};
  height: 100%;

  max-width: 1120px;
  min-width: 360px;
  width: 100%;
  margin: auto;

  main {
    background: ${(props) => (props.dark ? "#3B3B3B" : "#f7f7f7")};
    color: ${(props) => (props.dark ? "#f7f7f7" : "#3B3B3B")};
    margin: 0 20px;
  }
`;
