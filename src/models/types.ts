import { ReactNode } from 'react';
import { BusinessColumns } from './BusinessModel';
import { Name, UserColumns } from './UserModel';
import { Address, Image } from './CommonModels';


export interface CommonProps {
    children?: ReactNode;
    className?: string;
}

export type updateUserNormalizedData = {
    name: OmitID<Name>;
    phone: string;
    image: OmitID<Image>;
    address: OmitID<Address>;
};

export type updateUserData = {
    "first name": string;
    "middle name": string;
    "last name": string;
    phone: string;
    "image url": string;
    "image alt": string;
    state: string;
    country: string;
    city: string;
    street: string;
    "house number": string;
    zip: string;
};

export type OmitID<T> = Omit<T, "_id">;


type Join<K, P> = K extends string | number ?
    P extends string | number ?
    `${K}${"" extends P ? "" : "."}${P}`
    : never : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]

type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: K extends string | number ?
        `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never
    }[keyof T] : ""

type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";

type NestedObjectType = {
    a: string;
    b: string;
    nest: {
        c: string;
    };
    otherNest: {
        c: string;
    };
};

type NestedObjectPaths = Paths<NestedObjectType>;
type NestedObjectLeaves = Leaves<NestedObjectType>;

interface Tree {
    left: Tree,
    right: Tree,
    data: string
}

type TreeLeaves = Leaves<Tree, 3>;


export type BusinessColumnsBoolean = {
    [key in Paths<BusinessColumns>]: boolean;
}

export type UserColumnsBoolean = {
    [key in Paths<UserColumns>]: boolean;
}

export type ColumnType = {
    columns: BusinessColumnsBoolean | UserColumnsBoolean
}

export type ColumnNames = keyof BusinessColumns | keyof UserColumns;



