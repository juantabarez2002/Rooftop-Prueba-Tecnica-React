import { useState, useEffect } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function UserSearch({
  value,
  onChange,
  placeholder = "Buscar...",
}: Props) {
  const [input, setInput] = useState(value);
  const [isValid, setIsValid] = useState(true);

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/;

  useEffect(() => {
    const valid = nameRegex.test(input);
    setIsValid(valid);
    if (valid) {
      onChange(input);
    }
  }, [input]);

  return (
    <div className="w-full max-w-md flex items-center gap-2">
      <input
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`flex-1 px-3 py-2 rounded outline-none border ${
          isValid ? "border-gray-300 focus:border-gray-500" : "border-red-500"
        }`}
      />
      {!isValid && (
        <span className="text-sm text-red-500 whitespace-nowrap">
          Entrada inválida. Solo se permiten letras y espacios.
        </span>
      )}
    </div>
  );
}
