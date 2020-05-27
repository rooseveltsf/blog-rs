import React from "react"
import Img from "gatsby-image"

import { Tech } from "./styles"

function Item({ dark, data }) {
  return (
    <div>
      <Tech dark={dark} key={data.name}>
        <Img
          style={{
            width: 180,
            heigth: 180,
          }}
          fluid={data.image}
        />

        <div>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
      </Tech>
    </div>
  )
}

export default Item
