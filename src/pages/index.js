import React, { useContext } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { motion } from "framer-motion"

import { StateContext } from "../context/StateContext"

import SEO from "../components/Seo"
import SwitchButton from "../components/SwitchButton"

import GlobalStyle from "../styles/global"
import {
  Container,
  Logo,
  ContainerHome,
  ContainerData,
  ContainerButtons,
  PageProjects,
  PageAbout,
} from "./styles"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const IndexPage = () => {
  const { dark, toggleDark } = useContext(StateContext)

  const data = useStaticQuery(graphql`
    query {
      light: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dark: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container dark={dark}>
      <SEO title="Home" />
      <ContainerHome>
        <SwitchButton check={dark} on={toggleDark} />
        <ContainerData>
          <Logo
            fluid={
              dark
                ? data.dark.childImageSharp.fluid
                : data.light.childImageSharp.fluid
            }
          />

          <motion.p initial="hidden" animate="visible" variants={variants}>
            O Lorem Ipsum tem vindo a ser o texto padrão usado por estas
            indústrias desde o ano de 1500, quando uma misturou os caracteres de
            um texto para criar um espécime de livro.
          </motion.p>
        </ContainerData>
      </ContainerHome>

      <ContainerButtons>
        <PageProjects dark={dark} to="/projects">
          Projetos
        </PageProjects>
        <PageAbout dark={dark} to="/about">
          Sobre
        </PageAbout>
      </ContainerButtons>
      <GlobalStyle />
    </Container>
  )
}

export default IndexPage
