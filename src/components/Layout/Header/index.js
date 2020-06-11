import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { defaultBreakpoints } from "styled-media-query";

import { StateContext } from "../../../context/StateContext";

import SwitchButton from "../../SwitchButton";
import { Container, LinkHeader, LinkBack } from "./styles";

const Header = ({ template }) => {
  const [width] = useState(window.innerWidth);
  const theme = useContext(StateContext);

  return (
    <Container dark={theme.dark}>
      {template
        ? (
          <LinkBack to="/projects">
            <FaArrowLeft size={16} color="#F27D52" />
            Voltar
          </LinkBack>
        )
        : (
          <nav>
            <ul>
              <li>
                <LinkHeader to="/">Home</LinkHeader>
              </li>
              <li>
                <LinkHeader to="/projects">Projetos</LinkHeader>
              </li>
              <li>
                <LinkHeader to="/about">Sobre</LinkHeader>
              </li>
            </ul>
          </nav>
        )}

      <SwitchButton check={theme.dark} on={theme.toggleDark} />
    </Container>
  );
};

export default Header;
