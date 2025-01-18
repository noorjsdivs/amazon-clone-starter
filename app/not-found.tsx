import React from "react";
import Link from "next/link";
import { logo } from "@/assets";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-5 md:py-20">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="bg-amazonBlue w-28 p-2 rounded-sm mx-auto">
            <Image src={logo} alt="Amazon Logo" width={180} height={100} />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Looking for something?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re sorry. The Web address you entered is not a functioning
            page on our site.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <Link
              href="/"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-amazonOrange hover:bg-amazonOrangeDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonOrangeDark hoverEffect"
            >
              Go to Amazon&apos;s home page
            </Link>
            <Link
              href="/help"
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-amazonBlue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazonBlue"
            >
              Help
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help? Visit the{" "}
            <Link
              href="/help"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              Help section
            </Link>{" "}
            or{" "}
            <Link
              href="/contact"
              className="font-medium text-amazon-blue hover:text-amazon-blue-dark"
            >
              contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
