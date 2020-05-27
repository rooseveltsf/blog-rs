import React, { useContext } from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import { FaStar, FaGithubAlt } from "react-icons/fa"
import { StateContext } from "../context/StateContext"

import { Container, Link, ContainerHTML } from "./styles"

const Project = ({ data: { markdownRemark, img } }) => {
  const { html, frontmatter } = markdownRemark
  const { title, repositories } = frontmatter
  console.log(html)

  const theme = useContext(StateContext)
  return (
    <Layout seo={title} template={true}>
      <Container>
        <h2>{title}</h2>
        <div>
          <Link dark={theme.dark} target="blank" href={repositories}>
            <FaGithubAlt />
            Repositories
          </Link>
          <Link dark={theme.dark} target="blank" star={true} href="/">
            <FaStar />
            Star
          </Link>
        </div>

        <ContainerHTML
          dangerouslySetInnerHTML={{ __html: html }}
          dark={theme.dark}
        >
          {/* <h3>Introdução</h3>
          <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de
            impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
            estas indústrias desde o ano de 1500, quando uma misturou os
            caracteres de um texto para criar um espécime de livro. Este texto
            não só sobreviveu 5 séculos, mas também o salto para a tipografia
            electrónica, mantendo-se essencialmente inalterada. Foi popularizada
            nos anos 60 com a disponibilização das folhas de Letraset, que
            continham passagens com Lorem Ipsum, e mais recentemente com os
            programas de publicação como o Aldus PageMaker que incluem versões
            do Lorem Ipsum.
          </p>

          <h3>Tela login</h3>
          <Image fluid={img.childImageSharp.fluid} /> */}
        </ContainerHTML>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPage($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        repositories
      }
    }
    img: file(relativePath: { eq: "readme.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Project
