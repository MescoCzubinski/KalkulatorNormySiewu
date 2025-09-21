import { useState } from "react";

function format(inputString: string) {
  return inputString
    .replace(/[^0-9.,]/g, "")
    .replace(/^0+(?=\d)/, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1")
    .replace(/[a-zA-Z]+/g, "");
}

export default function Input({
  number = false,
  text = false,
  select = false,
  value,
  setValue,
  title,
  placeholder,
  options = [],
  unit,
}: {
  number?: boolean;
  text?: boolean;
  select?: boolean;
  value: string;
  setValue: (value: string) => void;
  title: string;
  placeholder?: string;
  options?: {
    name: string;
    value: string;
  }[];
  unit?: string;
}) {
  const [afterFristClick, setAfterFristClick] = useState(false);

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={title} className="pl-1 pb-1 text-lg font-medium">
        {title}:
      </label>
      <div className="flex w-full h-fit gap-x-2 items-center">
        {text && (
          <input
            key={title}
            id={title}
            autoComplete="off"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder={placeholder}
          />
        )}
        {number && (
          <input
            key={title}
            id={title}
            autoComplete="off"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            onChange={(e) => {
              setAfterFristClick(true);
              setValue(format(e.target.value));
            }}
            value={afterFristClick ? value : ""}
            placeholder={placeholder}
          />
        )}
        {select && (
          <select
            onChange={(e) => {
              setAfterFristClick(true);
              setValue(e.target.value);
            }}
            key={title}
            id={title}
            value={afterFristClick ? value : ""}
            aria-label={title}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.length > 0 &&
              options.map((option) => (
                <option key={option.value + option.name} value={option.value}>
                  {option.name}
                </option>
              ))}
          </select>
        )}
        <div className="text-xl h-fit">{unit}</div>
      </div>
    </div>
  );
}
