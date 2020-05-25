import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.header`
  /* grid-area: cabecalho; */
  height: 70px;
  border-bottom: 1px solid ${({ dark }) => (dark ? "#575656" : "#ddd")};
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav ul {
    display: flex;
    list-style: none;
    li {
      margin-right: 32px;
      padding: 0;
    }
  }
`

export const LinkHeader = styled(Link).attrs({
  activeClassName: "active",
  activeStyle: {
    color: "#ffcc57",
    borderWidth: 1,
  },
})`
  font-size: 16px;
  text-decoration: none;
  color: #575656;
  font-weight: bold;
  padding-bottom: 24px;
  transition: all 0.2s;

  &:hover {
    color: #ffcc57;
    border-bottom: 1px solid #ffcc57;
  }
`

export const LinkBack = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #f27d52;
  font-weight: bold;
  position: relative;

  display: flex;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background: #f27d52;
    transition: width 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  svg {
    margin-right: 5px;
  }
`
