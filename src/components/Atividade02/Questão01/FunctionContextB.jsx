// FunctionContextB.jsx
import React from "react";
import { ColorThemeContext } from "./MyColorContext";

const FunctionContextB = () => {
  return (
    <ColorThemeContext.Consumer>
      {
        (value) => {
          return (
            <div>
              <h1 style={{ backgroundColor: value.bkgB }}>
                Contexto B
              </h1>
            </div>
          )
        }
      }
    </ColorThemeContext.Consumer>

  )
}

export default FunctionContextB;