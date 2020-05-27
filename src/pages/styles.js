import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
  background: ${(props) => props.dark && "#3B3B3B"};
  color: ${(props) => props.dark ? "#f7f7f7" : "#3B3B3B"};
  height: 100vh;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerHome = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 1120px;
  padding-top: 21px;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  p {
    margin-top: 32px;
    font-size: 24px;
    text-align: center;
    line-height: 34px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 130px;
`;

export const PageProjects = styled(Link)`
  width: 50%;
  text-decoration: none;
  color: ${(props) => props.dark ? "#f7f7f7" : "#3B3B3B"};
  font-size: 40px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.dark ? "#3B3B3B" : "#f7f7f7"};
`;
export const PageAbout = styled(Link)`
  width: 50%;
  text-decoration: none;
  color: ${(props) => props.dark ? "#3B3B3B" : "#f7f7f7"};
  font-size: 40px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.dark ? "#f7f7f7" : "#3B3B3B"};
`;
