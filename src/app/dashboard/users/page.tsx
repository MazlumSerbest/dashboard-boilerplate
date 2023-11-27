"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import { SortDescriptor } from "@nextui-org/table";
import { BiDotsVertical } from "react-icons/bi";
import DataTable from "@/components/DataTable";
import BoolChip from "@/components/BoolChip";
import { columns, users, activeOptions } from "./columns";

export default function Users() {
    const router = useRouter();
    const visibleColumns = ["name", "role", "active", "actions"];
    const sort: SortDescriptor = {
        column: "age",
        direction: "ascending",
    };

    const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
        const cellValue = user[columnKey as keyof User];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{
                            radius: "full",
                            size: "sm",
                            src: user.avatar,
                        }}
                        classNames={{
                            description: "text-zinc-500",
                        }}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "active":
                return <BoolChip value={user.active} />;
            case "actions":
                return (
                    <div className="relative flex justify-start items-center mx-2">
                        <Dropdown className="bg-white border-1 border-zinc-200">
                            <DropdownTrigger>
                                <Button
                                    isIconOnly
                                    radius="full"
                                    size="sm"
                                    variant="light"
                                >
                                    <BiDotsVertical className="text-xl text-zinc-400" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>View</DropdownItem>
                                <DropdownItem>Edit</DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <DataTable
            columns={columns}
            data={users}
            emptyContent="There is no data!"
            isCompact
            isStriped
            className="mt-4 mb-2"
            activeOptions={activeOptions}
            renderCell={renderCell}
            sortOption={sort}
            initialVisibleColumNames={visibleColumns}
            onDoubleClick={(item) => router.push("/dashboard/users/" + item.id)}
            onAddNew={() => router.push("/dashboard/users/create")}
        />
    );
}
