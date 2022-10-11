import * as React from "react";

type Props = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ label, ...otherProps }: Props) => {
  return (
    <button
      {...otherProps}
      className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      {label}
    </button>
  );
};

export default Button;
