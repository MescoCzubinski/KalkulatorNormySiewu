export default function Header({
  title,
  resetBtnText,
  reset,
  showResetButton = true,
}: {
  title: string;
  resetBtnText: string;
  reset?: (value: boolean) => void;
  showResetButton?: boolean;
}) {
  if (!showResetButton && reset) {
    reset(false);
  }

  return (
    <div className="flex justify-center items-center w-full px-2 pb-4 pt-2">
      <div className="w-full lg:w-4/8 flex flex-nowrap gap-x-2 md:gap-x-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-left flex-wrap">{title}</h1>
        <div className="my-auto">
          {showResetButton && (
            <button
              type="button"
              onClick={() => reset?.(true)}
              className="text-3xl border-2 rounded-full p-2 px-3 bg-[var(--bg-color)] cursor-pointer hover:shadow-[0_0_10px_var(--primary-color)] transition-shadow outline-0"
              aria-label={resetBtnText}
              title={resetBtnText}
            >
              Resetuj
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
