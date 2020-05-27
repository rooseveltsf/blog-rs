import styled from "styled-components"

export const Container = styled.div`
  h2 {
    margin-top: 64px;
    margin-bottom: 64px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
  }
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ dark }) => (dark ? "#484848" : "#eee")};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  /* padding: 20px; */
  border-radius: 4px;
  width: 45%;
  height: 400px;

  margin-bottom: 50px;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30%;
  /* background: red; */

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      font-size: 40px;
      /* display: block; */
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
`
