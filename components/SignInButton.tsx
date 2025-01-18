import { signIn } from "@/auth";
import React from "react";
import { BiCaretDown } from "react-icons/bi";

const SignInButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        // await signIn("google", { redirectTo: "/" });
        await signIn();
      }}
      className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
    >
      <button className="text-left text-white font-semibold md:text-gray-100 md:font-normal">
        Hello, sign in
      </button>
      <button
        type="submit"
        className="text-white font-bold hidden md:flex items-center"
      >
        Account & Lists{" "}
        <span>
          <BiCaretDown />
        </span>
      </button>
    </form>
  );
};

export default SignInButton;
