import z from "zod";
import { Address, Image } from "./BusinessModel";

export interface createCardNormalizedData {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    web: string;
    image: Omit<Image, "_id">;
    address: Omit<Address, "_id">;
}

export interface createCardData {
    title: string;
    subtitle: string;
    description: string;
    phone: string;
    email: string;
    website: string;
    state: string;
    country: string;
    city: string;
    street: string;
    "house number": string;
    zip: string;
    "image address": string;
    "image description": string;
}

const schema = z.object({
    title: z.string()
        .regex(/[\w ]{5,20}/, { message: "Must be only English letters up to 20 characters" }),
    subtitle: z.string()
        .regex(/[\w ]{2,20}/, { message: "Must be only English letters up to 20 characters" }),
    description: z.string()
        .regex(/[\w ]{2,80}/, { message: "Must be only English letters up to 80 characters" }),
    phone: z.string()
        .regex(/^[+\d]{10,15}$/, { message: "Phone must be at least 10 digits" }),
    state: z.string()
        .regex(/^[a-zA-Z '0-9]*$/, { message: "Must only include English letters and digits" })
        .nullable(),
    country: z.string()
        .regex(/^[a-zA-Z '0-9]+$/, { message: "Must only include English letters and digits" }),
    city: z.string()
        .regex(/^[a-zA-Z '0-9]+$/, { message: "Must only include English letters and digits" }),
    street: z.string()
        .regex(/^[a-zA-Z '0-9]+$/, { message: "Must only include English letters and digits" }),
    "house number": z.number(),
    zip: z.number().nullable(),
    website: z.string().url({ message: "Must be a URL" }),
    "image address": z.string().url(),
    "image description": z.string(),
    email: z.string()
        .regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/, { message: "Must be a valid email address" })
});

export default schema;
