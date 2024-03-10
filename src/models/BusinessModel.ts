import { Address, Image } from "@/models/CommonModels";

export interface IBusiness {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web?: string;
    image: Image;
    address: Address;
    bizNumber: number;
    likes: string[];
    user_id: string;
    createdAt: string | Date;
    __v: number;
}

export interface BusinessColumns {
    subtitle: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    web?: string;
    // address: Address;
    bizNumber: number;
    likes: string[];
    createdAt: string;
}

