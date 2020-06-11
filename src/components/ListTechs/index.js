import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, SliderTech } from "./styles";
import Item from "./Item";

const settings = {
  dots: true,
  // fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ListTechs({ dark }) {
  const data = useStaticQuery(graphql`
    query {
      javascript: file(relativePath: { eq: "javascript.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      node: file(relativePath: { eq: "node.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reactjs: file(relativePath: { eq: "react.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      git: file(relativePath: { eq: "git.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const techs = [
    {
      image: data.javascript.childImageSharp.fluid,
      name: "Javascript",
      description:
        "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. simplesmente texto aleatório.",
    },
    {
      image: data.node.childImageSharp.fluid,
      name: "Node.js",
      description:
        "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. simplesmente texto aleatório.",
    },
    {
      image: data.reactjs.childImageSharp.fluid,
      name: "ReactJS",
      description:
        "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. simplesmente texto aleatório.",
    },
    {
      image: data.reactjs.childImageSharp.fluid,
      name: "React Native",
      description:
        "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. simplesmente texto aleatório.",
    },
    {
      image: data.git.childImageSharp.fluid,
      name: "Git",
      description:
        "Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. simplesmente texto aleatório.",
    },
  ];

  return (
    <Container>
      <h2>Um pouco sobre as tecnologias trabalhadas</h2>
      <SliderTech
        className="slider-css"
        nextArrow={<FaArrowRight size={24} color={dark ? "#eee" : "#575656"} />}
        prevArrow={<FaArrowLeft size={24} color={dark ? "#eee" : "#575656"} />}
        {...settings}
      >
        {techs.map((tech) => (
          <Item dark={dark} data={tech} key={tech.name} />
        ))}
      </SliderTech>
    </Container>
  );
}

export default ListTechs;
