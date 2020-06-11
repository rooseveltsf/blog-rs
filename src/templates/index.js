import React, { useContext } from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import Layout from "../components/Layout";
import { FaStar, FaGithubAlt } from "react-icons/fa";
import { StateContext } from "../context/StateContext";

import { Container, Link, ContainerHTML } from "./styles";

const Project = ({ data: { markdownRemark, img } }) => {
  const { html, frontmatter } = markdownRemark;
  const { title, repositories } = frontmatter;

  const theme = useContext(StateContext);
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
        </ContainerHTML>
      </Container>
    </Layout>
  );
};

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
`;

export default Project;
