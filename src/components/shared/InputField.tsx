// NPM packages
import { useRef } from "react";

// Project files
import iInputFields from "types/iInPutFields";

interface iProps {
  options: (iInputFields & React.InputHTMLAttributes<HTMLInputElement>);
  
}


export default function InputField({ onChange, options, state }: iInputFields ) {
  const { key, label, placeholder, type, mode, required, error } = options;

  // Properties
  const inputReference = useRef<HTMLInputElement & HTMLTextAreaElement>(null);

  const emptyField = state && state.trim().length < 1;
  const noAtSign = state && key === "email" && !state.includes("@");

  return (
    <>
      {key !== "description" && (
        <label className={key}>
          {label} :
          <input
            ref={inputReference}
            value={state}
            type={type}
            placeholder={mode === "edit" ? state : placeholder}
            required={required}
            onChange={() => onChange(key, inputReference.current!.value)}
          />
          {(noAtSign || emptyField) && <p className="error">{error}</p>}
        </label>
      )}
      {type === "textarea" && (
        <label className={key}>
          {label} :
          <textarea
            ref={inputReference}
            value={state}
            // type={type}
            placeholder={mode === "edit" ? state : placeholder}
            required={required}
            onChange={() => onChange(key, inputReference.current!.value)}
            cols={30}
            rows={10}
          />
          {emptyField && <p className="error">{error} </p>}
        </label>
      )}
    </>
  );
}
