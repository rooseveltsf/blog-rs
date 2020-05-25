import styled from "styled-components"

export const Container = styled.footer`
  height: 85px;
  border-top: 1px solid ${({ dark }) => (dark ? "#575656" : "#ddd")};
  color: ${({ dark }) => (dark ? "#ddd" : "#575656")};

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 16px;

    strong {
      color: ${({ dark }) => (dark ? "#f7f7f7" : "#3b3b3b")};
    }
  }

  nav ul {
    display: flex;
    list-style: none;
    li {
      margin: 0 16px;
      padding: 0;

      a {
        font-size: 17px;
        text-decoration: none;
        color: ${({ dark }) => (dark ? "#ddd" : "#575656")};
        font-weight: bold;
        padding-bottom: 24px;

        &:hover {
          color: #ffcc57;
        }
      }
    }
  }
`
