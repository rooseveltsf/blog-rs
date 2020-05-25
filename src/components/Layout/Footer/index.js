import React, { useContext } from "react"
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"

import { StateContext } from "../../context/StateContext"
import { Container } from "./styles"

function Footer() {
  const { dark } = useContext(StateContext)
  return (
    <Container dark={dark}>
      <p>
        Desenvolvido por <strong>Roosevelt de Souza</strong>
      </p>

      <nav>
        <ul>
          <li>
            <a href="https://github.com/rooseveltsf" target="blank">
              <FaGithub size={20} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Footer
