import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Container, ContainerInfo } from "./styles"

function Info({ dark }) {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 301) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <Img
        style={{
          width: 290,
          heigth: 290,
          borderRadius: "50%",
        }}
        fluid={data.avatar.childImageSharp.fluid}
      />
      <ContainerInfo dark={dark}>
        <h3>Sobre mim</h3>
        <p>
          O Lorem Ipsum é um texto modelo da indústria tipográfica e de
          impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
          estas indústrias desde o ano de 1500, quando uma misturou os
          caracteres de um texto para criar um espécime de livro. Este texto não
          só sobreviveu 5 séculos, mas também o salto para a tipografia
          electrónica, mantendo-se essencialmente inalterada. Foi popularizada
          nos anos 60 com a disponibilização das folhas de Letraset, que
          continham passagens com Lorem Ipsum, e mais recentemente com os
          programas de publicação como o Aldus PageMaker que incluem versões do
          Lorem Ipsum.
        </p>
      </ContainerInfo>
    </Container>
  )
}

export default Info
