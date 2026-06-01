import { useEffect, useState } from "react";

interface ActionCheckboxProps {
  id: string;
  label: string;
  tone?: "orange" | "green" | "blue" | "pink" | "gray";
  compact?: boolean;
}

const toneClasses = {
  orange: "border-orange-300 text-orange-600 focus:ring-orange-500",
  green: "border-green-300 text-green-600 focus:ring-green-500",
  blue: "border-blue-300 text-blue-600 focus:ring-blue-500",
  pink: "border-pink-300 text-pink-600 focus:ring-pink-500",
  gray: "border-gray-300 text-gray-700 focus:ring-gray-500",
};

export default function ActionCheckbox({
  id,
  label,
  tone = "orange",
  compact = false,
}: ActionCheckboxProps) {
  const storageKey = `bnb-check-${id}`;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(localStorage.getItem(storageKey) === "true");
  }, [storageKey]);

  const updateChecked = (nextChecked: boolean) => {
    setChecked(nextChecked);
    localStorage.setItem(storageKey, String(nextChecked));
    window.dispatchEvent(new CustomEvent("bnb-check-change"));
  };

  return (
    <label className={`flex items-start gap-2 ${compact ? "text-xs" : "text-sm"} cursor-pointer`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => updateChecked(event.target.checked)}
        className={`mt-0.5 h-4 w-4 rounded ${toneClasses[tone]}`}
        aria-label={label}
      />
      <span className={checked ? "text-gray-400 line-through" : "text-gray-900"}>{label}</span>
    </label>
  );
}
