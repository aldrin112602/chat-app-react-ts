import React from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  label?: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  type = "text",
  className = "border-2 border-gray-300 p-2 rounded w-full",
  placeholder,
  name,
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="mb-3 mt-2">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        name={name}
        {...props}
      />
    </div>
  );
};
