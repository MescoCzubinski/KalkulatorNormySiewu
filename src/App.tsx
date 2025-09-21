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
      <Header
        title="Oblicz normy siewu z plonu"
        resetBtnText={"Reset"}
        reset={setIsReset}
      ></Header>
      <div className="flex justify-center w-fit flex-wrap gap-10 p-4 bg-[var(--bg-color)] rounded-3xl shadow-[0_0_15px_var(--primary-color)]">
        {inputMode === "none" && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setInputMode("simple")}
              className="h-10 px-2 text-lg flex-1 w-full rounded-full border-2 border-[var(--primary-color)] cursor-pointer hover:shadow-[0_0_5px_var(--primary-color)] transition-shadow outline-0"
            >
              Prosty
            </button>
            <button
              onClick={() => setInputMode("advanced")}
              className="h-10 px-2 text-lg flex-1 w-full rounded-full border-2 border-[var(--primary-color)] cursor-pointer hover:shadow-[0_0_5px_var(--primary-color)] transition-shadow outline-0"
            >
              Zaawansowany
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
