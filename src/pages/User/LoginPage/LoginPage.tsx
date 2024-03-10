"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/Button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/forms/Form"
import { Input } from "@/components/ui/Input"
import { LoginForm } from "@/components/forms/LoginForm"
import Box from "@/components/ui/Box"


export default function LoginPage() {
    // ...

    return (
        <Box>
            <LoginForm></LoginForm>
        </Box>
    )
}
