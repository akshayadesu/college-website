

"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    id: z.string().min(1, {
        message: "ID is required.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phonenumber: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    address: z.string().min(5, {
        message: "Address must be at least 5 characters.",
    }),
    "date-of-birth": z.string().regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date of Birth must be in YYYY-MM-DD format."
    ),
    course: z.string().min(2, {
        message: "Course must be at least 2 characters.",
    }),
});

function onSubmit(values: any) {
    console.log(values);
}

export default function Signup() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: "",
            username: "",
            email: "",
            phonenumber: "",
            address: "",
            "date-of-birth": "",
            course: "",
        },
    });

    return (
        <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Sign-Up</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {["id", "username", "email", "phonenumber", "address", "date-of-birth", "course"].map((fieldName) => (
                            <FormField
                                key={fieldName}
                                control={form.control}
                                name={fieldName}
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center gap-4">
                                            <FormLabel className="min-w-max">{fieldName.replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())}</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type={fieldName === "date-of-birth" ? "date" : "text"}
                                                    {...field}
                                                    className="w-full"
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}
                        <Button type="submit" className="w-full mt-4">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
        </>
    );
}
