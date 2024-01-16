import Link from "next/link";
import React from "react";
import Dropdown, { DropdownItem } from "./Dropdown";
import Button from "@/components/Elements/Button";

import { authUserSession } from "@/lib/auth-libs";
import Image from "next/image";

const Navbar = async () => {
  const user = await authUserSession();

  return (
    <nav className="fixed z-50 w-full px-8 sm:px-16">
      <div className="flex flex-row items-center justify-between gap-2 my-8">
        <Link href="/" className="text-2xl font-bold">
          AnimeKuy
        </Link>
        {user ? (
          <Dropdown trigger={<Button>Dashboard</Button>}>
            <DropdownItem>
              <Image
                src={user.image}
                className="w-12 rounded-full"
                width={48}
                height={48}
                alt="avatar"
              />
              <div className="py-2">
                <p className="font-medium">{user.name}</p>
                <a className="text-sm font-medium text-gray-500">
                  {user.email}
                </a>
              </div>
            </DropdownItem>
            <DropdownItem>
              <Link href="/user/collection" className="">
                Collection
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/user/comment" className="">
                Comment
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/api/auth/signout" className="">
                Sign Out
              </Link>
            </DropdownItem>
          </Dropdown>
        ) : (
          <Link
            href="/api/auth/signin"
            className="flex gap-2 px-4 py-2 font-medium text-white bg-green-500 rounded-lg"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
