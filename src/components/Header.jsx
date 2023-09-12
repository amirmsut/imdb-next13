import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

// Component
import MenuItem from "./MenuItem";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
    return (
        <div className="shadow-md bg-white sticky top-0 dark:bg-gray-900">
            <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
                <div className="flex">
                    <MenuItem title="Home" address="/" Icon={AiFillHome} />
                    <MenuItem
                        title="About"
                        address="/about"
                        Icon={BsFillInfoCircleFill}
                    />
                </div>
                <div className="flex items-center space-x-5">
                    <DarkModeSwitch />
                    <Link href="/">
                        <h2 className="text-2xl">
                            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
                                IMDb
                            </span>
                            <span className="text-xl hidden sm:inline">
                                Next13
                            </span>
                        </h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
