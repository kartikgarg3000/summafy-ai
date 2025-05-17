"use client"
import { forwardRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UploadFormInputProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

export const UploadFormInput = forwardRef<HTMLFormElement, UploadFormInputProps>(
    ({ onSubmit, isLoading }, ref) => {
        return (
            <form ref={ref} className="flex flex-col gap-6" onSubmit={onSubmit}>
                <div className="flex justify-end items-center gap-1.5">
                    <Input id='file' name='file' type="file" accept="application/pdf" required className="hover:cursor-pointer shadow-lg border-2 hover:shadow-2xl transition-shadow duration-200 rounded-md" />
                    <Button variant={'link'} disabled={isLoading} className="transform hover:scale-105 transition hover:no-underline flex gap-2 text-base items-center bg-teal-500 hover:bg-blue-600 text-white mt-2duration-320 ease-in-out ">
                        <span className="pl-2">Upload your PDF</span>
                    </Button>
                </div>
            </form>
        )

    }
)