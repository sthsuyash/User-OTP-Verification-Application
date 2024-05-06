import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
    InputOTPSeparator,
} from "@/components/ui/input-otp";

import { TResponseData } from "@/lib/types";
import { Spinner } from "./ui/Spinner/Spinner";
import config from "@/config";

const FormSchema = z.object({
    code: z.string().min(6, {
        message: "Your verification code must be 6 characters.",
    }),
});

export function VerificationOTP() {
    const API_URL = config.serverUrl;
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            code: "",
        },
    });

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}/verify`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData: TResponseData = await response.json();
            if (responseData.success) {
                toast.success(responseData.message);
                navigate("/success");
            } else {
                toast.error(`Error: ${responseData.message}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(`Error: ${error.message || "An error occurred"}`);
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-2xl font-semibold">Verification Code</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    {[...Array(6)].map((_, index) => (
                                        <div key={index}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={index} />
                                            </InputOTPGroup>
                                            {index < 5 && <InputOTPSeparator />}
                                        </div>
                                    ))}
                                </InputOTP>
                            </FormControl>
                            <FormDescription>
                                Please enter the verification code sent to your phone.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Spinner />
                            Submitting...
                        </>
                    ) : (
                        "Submit"
                    )}
                </Button>
            </form>
        </Form>
    );
}
