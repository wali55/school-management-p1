// import { FieldError } from "react-hook-form";

// type InputFieldProps = {
//   label: string;
//   type?: string;
//   register: any;
//   name: string;
//   defaultValue?: string;
//   error?: FieldError;
//   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
// };

// const InputField = ({
//   label,
//   type = "text",
//   register,
//   name,
//   defaultValue,
//   error,
//   inputProps,
// }: InputFieldProps) => {
//   return (
//     <div className="flex flex-col gap-2 w-full md:w-1/4">
//       <label className="text-xs text-gray-500">{label}</label>
//       <input
//         type={type}
//         {...register(name)}
//         className="border border-gray-300 p-2 rounded-md w-full text-sm"
//         defaultValue={defaultValue}
//         {...inputProps}
//       />
//       {error?.message && (
//         <p className="text-xs text-red-400">{error?.message}</p>
//       )}
//     </div>
//   );
// };

// export default InputField;

// import { FieldError } from "react-hook-form";

// type InputFieldProps = {
//   label: string;
//   type?: string;
//   name: string;
//   defaultValue?: string;
//   register: any;
//   error?: FieldError; 
//   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
// }

// const InputField = ({label, type = "text", name, defaultValue, register, error, inputProps}: InputFieldProps) => {
//   return (
//     <div className="flex flex-col gap-2 w-full md:w-1/4">
//       <label className="text-xs text-gray-400 font-semibold">{label}</label>
//       <input type={type} {...register(name)} defaultValue={defaultValue} {...inputProps} className="w-full border border-gray-300 p-2 rounded-md text-sm" />
//       {error?.message && <p className="text-xs text-red-400">{error?.message}</p>}
//     </div>
//   )
// }

// export default InputField;

import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  type?: string;
  name: string;
  defaultValue?: string;
  register: any;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const InputField = ({label, type = "text", name, defaultValue, register, inputProps, error}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs font-semibold text-gray-400">{label}</label>
      <input type={type} {...register(name)} defaultValue={defaultValue} {...inputProps} className="w-full border border-gray-300 rounded-md p-2 text-sm" />
      {error?.message && <p className="text-xs text-red-400">{error?.message}</p>}
    </div>
  )
}

export default InputField;