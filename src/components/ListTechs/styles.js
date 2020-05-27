import styled from "styled-components"
import Slider from "react-slick"

export const Container = styled.section`
  width: 100%;
  height: 400px;
  margin: 32px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SliderTech = styled(Slider)`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
  width: 70%;
  height: 265px;
  margin-top: 32px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`
