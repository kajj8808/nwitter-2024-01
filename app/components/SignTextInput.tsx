import { UseFormRegisterReturn } from "react-hook-form";

function SignTextInput({ register }: { register: UseFormRegisterReturn }) {
  return (
    <div className="flex w-full flex-col md:w-[420px]">
      <label className="font-bold" htmlFor={register.name}>
        {register.name.charAt(0).toUpperCase() + register.name.slice(1)}
      </label>
      <input
        {...register}
        className="mt-1 w-full rounded-md px-3 py-3 outline-none ring-1"
        type={register.name}
      />
    </div>
  );
}
export default SignTextInput;
