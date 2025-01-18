"use client"; // Add this at the top of the file

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SignOutButton = () => {
  const { data: session } = useSession();

  if (!session) return null; // Optionally handle logged-out users
  return (
    <div className="text-xs text-gray-100 flex gap-2 items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
      <Image
        src={session?.user?.image as string}
        alt="userImage"
        width={200}
        height={200}
        className="w-10 rounded-full"
      />
      <div>
        <p>Hello, {session?.user?.name}</p>
        <button
          onClick={() => signOut()}
          className="text-white font-bold flex items-center"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default SignOutButton;
