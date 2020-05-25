import React from "react"
import Switch from "react-switch"
import { MdBrightness3, MdWbSunny } from "react-icons/md"

const styleSwitch = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  justifyContent: "center",
}

const SwitchButton = ({ check, on }) => (
  <Switch
    onColor={"#575656"}
    offHandleColor={"#f7f7f7"}
    uncheckedIcon={
      <div style={styleSwitch}>
        <MdBrightness3 color="#f7f7f7" size={20} />
      </div>
    }
    checkedIcon={
      <div style={styleSwitch}>
        <MdWbSunny color="#f7f7f7" size={20} />
      </div>
    }
    checked={check}
    onChange={on}
  />
)

export default SwitchButton
