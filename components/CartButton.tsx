"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cartIcon } from "../assets";
import { store } from "../lib/store";

const CartButton = () => {
  const { cartProduct } = store();

  return (
    <Link
      href={"/cart"}
      className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
    >
      <Image
        src={cartIcon}
        alt="cartIcon"
        className="w-auto object-cover h-8"
      />
      <p className="text-xs text-white font-bold mt-3">Cart</p>
      <span className="absolute text-amazonOrangeDark text-sm top-2 left-[29px] font-semibold">
        {cartProduct ? cartProduct.length : 0}
      </span>
    </Link>
  );
};

export default CartButton;
