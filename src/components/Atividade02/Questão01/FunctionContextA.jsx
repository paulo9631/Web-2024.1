import { ColorThemeContext } from "./MyColorContext";
import FunctionContextB from "./FunctionContextB";
import FunctionContextC from "./FunctionContextC";
import FunctionContextD from "./FunctionContextD";

const FunctionContextA = () => {
  const cores = {
    bkgA: "green",
    bkgB: "white",
    bkgC: "yellow",
    bkgD: "blue",
  };
  
  return (
    <ColorThemeContext.Provider value={cores}>
      <div style={{ backgroundColor: cores.bkgA }}>
        <h1>Contexto A</h1>
        </div>
      <FunctionContextB />
      <FunctionContextC />
      <FunctionContextD />
    </ColorThemeContext.Provider>
  );
};

export default FunctionContextA;