import React, { useContext } from "react"

import { StateContext } from "../../context/StateContext"
import Info from "../../components/Info"
import Layout from "../../components/Layout"
import ListTechs from "../../components/ListTechs"

import { Container } from "./styles"

function About() {
  const { dark } = useContext(StateContext)

  return (
    <Layout seo="Sobre">
      <Container>
        <h2>Conheçam um pouco o dono do blog</h2>
        <Info dark={dark} />

        <ListTechs dark={dark} />
      </Container>
    </Layout>
  )
}

export default About
