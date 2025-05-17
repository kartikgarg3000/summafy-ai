import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

export default function UploadHeader() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-teal-200 via-teal-500 to-teal-800 animate-gradiant-x group " >
                <Badge variant={"secondary"}
                    className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-blue-50 transition-colors duration-100 hover:bg-teal-200 ">
                    <Sparkles style={{ height: '25px', width: '25px' }} className="mr-2 text-teal-600 animate-pulse" />
                    <p className="text-base">AI-Powered Content Creation</p>
                </Badge>
            </div>
            <div className="capitalize text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <h1 className="font-bold py-6 text-center">
                    Start Uploading{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 px-2">Your PDF&apos;s</span>
                        <span className=" absolute inset-0 bg-teal-200/50 rounded-lg transform -skew-y-0 transition-transform duration-2 animate-spin-once " aria-hidden="true"></span>
                    </span>
                </h1>
                <div className="mt-2 text-lg leading-8 text-gray-600 max-w-4.5xl text-center">
                    <p>Upload your PDF and let our AI do the magic!✨</p>
                </div>
            </div>
        </div>
    )
}