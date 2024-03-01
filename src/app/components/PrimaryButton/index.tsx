import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: String;
};

export function PrimaryButton({ text, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="px-3 py-2 rounded-lg border border-blue-600 transition-all duration-300 dark:hover:bg-slate-900 hover:bg-slate-200"
    >
      {text}
    </button>
  );
}
