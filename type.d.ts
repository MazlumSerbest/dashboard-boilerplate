type Entity = {
    id: number;
    createAt: Date;
    createdBy: string;
    updateAt?: Date;
    updatedBy?: string;
};

type Path = {
    path: string;
    key: string;
    name: string;
    icon: React.ReactNode;
};

type ListBoxItem = {
    id: number;
    name: string;
};

//#region DataTable Component Types
type Column = {
    name: string;
    key: string;
    width?: number;
    sortable?: boolean;
    searchable?: boolean;
};

type ActiveOption = {
    name: string;
    key: string;
};
//#endregion

//#region Data Types
type User = Entity & {
    email: string;
    name: string;
    role: string;
    active: boolean;
    avatar: string;
};
//#endregion
