import Header from "./components/Header.tsx";
import SimpleCalculation from "./SimpleCalculation.tsx";
import AdvancedCalculation from "./AdvancedCalculation.tsx";

import { useState } from "react";
function App() {
  const [isReset, setIsReset] = useState(false);
  const [inputMode, setInputMode] = useState<"simple" | "advanced" | "none">(
    "none"
  );

  return (
    <div className="w-full min-h-screen h-full text-[var(--detail-color)] flex items-center flex-col bg-[#E6FFE6] p-2">
      <div className="flex justify-center w-fit flex-wrap gap-10 p-4 bg-[var(--bg-color)] rounded-3xl shadow-[0_0_15px_var(--primary-color)]">
        <Header
          title={
            inputMode === "none"
              ? "Kalkulator normy siewu"
              : inputMode === "simple"
              ? "Norma siewu z obsady jesienią"
              : inputMode === "advanced"
              ? "Norma siewu z plonu"
              : ""
          }
          resetBtnText={"Reset"}
          setInputMode={setInputMode}
          reset={setIsReset}
        />
        {inputMode === "none" && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setInputMode("simple")}
              className="text-3xl border-2 rounded-full p-2 px-4 bg-[var(--bg-color)] cursor-pointer hover:shadow-[0_0_10px_var(--primary-color)] transition-shadow outline-0"
            >
              z obsady
            </button>
            <button
              onClick={() => setInputMode("advanced")}
              className="text-3xl border-2 rounded-full p-2 px-4 bg-[var(--bg-color)] cursor-pointer hover:shadow-[0_0_10px_var(--primary-color)] transition-shadow outline-0"
            >
              z plonu
            </button>
          </div>
        )}
        {inputMode === "simple" && (
          <SimpleCalculation isReset={isReset} setIsReset={setIsReset} />
        )}
        {inputMode === "advanced" && (
          <AdvancedCalculation isReset={isReset} setIsReset={setIsReset} />
        )}
      </div>
    </div>
  );
}

export default App;
