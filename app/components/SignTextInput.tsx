import { UseFormRegisterReturn } from "react-hook-form";

function SignTextInput({ register }: { register: UseFormRegisterReturn }) {
  return (
    <div className="flex flex-col">
      <label className="font-bold" htmlFor={register.name}>
        {register.name.charAt(0).toUpperCase() + register.name.slice(1)}
      </label>
      <input
        {...register}
        className="mt-1 w-96 rounded-md px-3 py-3 outline-none ring-1"
        type={register.name}
      />
    </div>
  );
}
export default SignTextInput;
