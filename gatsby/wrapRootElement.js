import React from "react"
import { ThemeProvider } from "styled-components"

import { StateProvider } from "../src/context/StateContext"

import defaultTheme from "../src/styles/themes/default"

export function wrapRootElement({ element }) {
  return (
    <StateProvider>
      <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
    </StateProvider>
  )
}
