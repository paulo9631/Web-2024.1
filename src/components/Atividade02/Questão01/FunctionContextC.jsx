// FunctionContextC.jsx
import React from "react";
import { ColorThemeContext } from "./MyColorContext";

const FunctionContextC = () => {
  return (
    <ColorThemeContext.Consumer>
      {
        (value) => {
          return (
            <div>
              <h1 style={{ backgroundColor: value.bkgC }}>
                Contexto C
              </h1>
            </div>
          )
        }
      }
    </ColorThemeContext.Consumer>

  )
}

export default FunctionContextC;