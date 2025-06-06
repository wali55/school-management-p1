import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  hidden?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  hidden,
  inputProps,
}: InputFieldProps) => {
  const registerProps =
    type === "number"
      ? register(name, { valueAsNumber: true })
      : register(name);
  return (
    <div className={hidden ? "hidden" : "flex flex-col gap-2 w-full md:w-1/4"}>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...registerProps}
        className="border border-gray-300 p-2 rounded-md w-full text-sm"
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error?.message}</p>
      )}
    </div>
  );
};

export default InputField;
