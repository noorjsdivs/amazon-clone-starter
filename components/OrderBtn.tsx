import Link from "next/link";
import React from "react";

const OrderBtn = () => {
  return (
    <Link
      href={"/orders"}
      className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
    >
      <p>Orders</p>
      <p className="text-white font-bold">& Itemlists</p>

      <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazonOrangeDark font-medium rounded-sm">
        0
      </span>
    </Link>
  );
};

export default OrderBtn;
