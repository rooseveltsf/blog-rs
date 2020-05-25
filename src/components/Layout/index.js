import React, { useContext } from "react"
import PropTypes from "prop-types"
import { StateContext } from "../../context/StateContext"

import SEO from "../SEO"
import GlobalStyle from "../../styles/global"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "./styles"
import Header from "../Header"
import Footer from "../Footer"

const duration = 0.5
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
}

const Layout = ({ children, template, seo }) => {
  const { dark } = useContext(StateContext)

  return (
    <>
      <Container dark={dark}>
        <SEO title={seo} />
        <Header template={template} />
        <AnimatePresence>
          <motion.main
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </Container>
      <GlobalStyle dark={dark} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
