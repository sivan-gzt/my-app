import z from "zod";

const signupSchema = z.object({
    "first name": z.string()

        .min(2)
        .regex(/^[a-zA-Z.]+$/, {
            message: "Please enter at least 2 characters with only english letters",
        }),
    "middle name": z.string()
        .regex(/^[a-zA-Z.]+$/, {
            message: "Please enter at least 2 characters with only english letters",
        }).optional(),
    "last name": z.string()
        .regex(/^[a-zA-Z.]+$/, {
            message: "Please enter at least 2 characters with only english letters",
        }),
    email: z.string()

        .regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/, { message: "Please enter a valid email" }),
    phone: z.string()
        .regex(/^[+\d]{9,11}$/, { message: "Phone must be between 9 and 11 digits" }),
    password: z.string()
        .min(9)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_])/, {
            message:
                "Password must be over 9 characters and include: a capital letter, a lowecase letter, a digit and a special character from !@#$%^&*-_",
        }),
    confirmPassword: z.string()
        .min(9)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*\-_])/, {
            message:
                "Password must be over 9 characters and include: a capital letter, a lowecase letter, a digit and a special character from !@#$%^&*-_",
        }),
    "image url": z.string().url(),
    "image alt": z.string(),
    state: z.string()
        .regex(/^[a-zA-Z ']+$/, { message: "Must only include English letters" })
        .optional(),
    country: z.string()
        .regex(/^[a-zA-Z ']+$/, { message: "Must only include English letters" }),
    city: z.string()
        .regex(/^[a-zA-Z ']+$/, { message: "Must only include English letters" }),
    street: z.string()
        .regex(/^[a-zA-Z ']+$/, { message: "Must only include English letters" }),
    "house number": z.string()
        .regex(/^\d+$/, { message: "Must be a number" }),
    zip: z.string()
        .regex(/^\d+$/, { message: "Must be a number" }),
    "business account": z.boolean(),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
});

export default signupSchema;