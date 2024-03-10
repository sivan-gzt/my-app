import { z } from "zod";

const loginSchema = z.object({
    password: z.string(),
    // .min(9)
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_])/, { message: "Password must be over 9 characters, with a capital letter, lowecase letter a number and a special character from !@#$%^&*-_" }),
    email: z.string()
        .regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/, { message: "Please enter a valid email" }),
});

export default loginSchema;