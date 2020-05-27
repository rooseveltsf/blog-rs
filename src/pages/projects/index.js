import React, { useContext } from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaArrowRight } from "react-icons/fa"

import { StateContext } from "../../context/StateContext"
import { Container, ListItems, Item, Info } from "./styles"
import Layout from "../../components/Layout"

const Projects = ({ data: { allMarkdownRemark, node } }) => {
  const { edges } = allMarkdownRemark
  const theme = useContext(StateContext)
  return (
    <Layout seo="Projetos">
      <Container>
        <h2>Projetos Desenvolvidos</h2>

        <ListItems>
          {edges.map(item => (
            <Item dark={theme.dark} key={item.node.frontmatter.title}>
              <Image
                style={{
                  width: "100%",
                  heigth: "70%",
                  marginRight: 32,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
                fluid={item.node.frontmatter.image.childImageSharp.fluid}
              />
              <Info dark={theme.dark}>
                <div>
                  <strong>{item.node.frontmatter.title}</strong>
                  <p>{item.node.frontmatter.date}</p>
                </div>
                <Link to={item.node.frontmatter.path}>
                  <FaArrowRight />
                </Link>
              </Info>
            </Item>
          ))}
        </ListItems>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            title
            path
            date
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    node: file(relativePath: { eq: "readme.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Projects
