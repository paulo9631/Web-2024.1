// FunctionContextD.jsx
import React from "react";
import { ColorThemeContext } from "./MyColorContext";

const FunctionContextD = () => {
  return (
    <ColorThemeContext.Consumer>
      {
        (value) => {
          return (
            <div>
              <h1 style={{ backgroundColor: value.bkgD }}>
                Contexto D
              </h1>
            </div>
          )
        }
      }
    </ColorThemeContext.Consumer>

  )
}

export default FunctionContextD;