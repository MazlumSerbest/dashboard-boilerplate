import React from "react";
import {
    BiCollection,
    BiUser,
    BiCog,
} from "react-icons/bi";

export const paths: Path[] = [
    {
        path: "/dashboard",
        key: "dashboard",
        name: "Dashboard",
        icon: (
            <BiCollection
                className="text-2xl text-zinc-500"
                aria-label="Dashboard"
            />
        ),
    },
    {
        path: "/dashboard/users",
        key: "users",
        name: "Users",
        icon: (
            <BiUser
                className="text-2xl text-zinc-500"
                aria-label="Users Page"
            />
        ),
    },
    {
        path: "/dashboard/settings",
        key: "settings",
        name: "Settings",
        icon: (
            <BiCog
                className="text-2xl text-zinc-500"
                aria-label="Settings Page"
            />
        ),
    },
];
