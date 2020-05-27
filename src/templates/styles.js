import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    margin-top: 64px;

    /* text-align: center; */
    font-size: 36px;
    font-weight: bold;
  }

  div {
    margin-top: 32px;
    display: flex;
  }
`

export const Link = styled.a`
  height: 40px;
  text-decoration: none;
  margin-right: 32px;
  color: #ffcc57;
  font-size: 24px;
  font-weight: bold;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 3px;
    background: #ffcc57;
    transition: width 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  svg {
    margin-right: 12px;
  }
`

export const ContainerHTML = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 40px;
    margin-bottom: 22px;
    font-size: 24px;
    font-weight: bold;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 10px;
      font-size: 16px;
      color: ${({ dark }) => (dark ? '#D1CCCC' : '#575656')};

      strong {
        color: ${({ dark }) => (dark ? '#f7f7f7' : '#3B3B3B')};
      }
    }
  }

  ol {
    list-style: none;

    li {
      margin-bottom: 10px;
    }
  }

  p {
    color: ${({ dark }) => (dark ? '#D1CCCC' : '#575656')};
    font-size: 16px;
    line-height: 26px;
    text-align: justify;
    margin-bottom: 32px;
  }
`
