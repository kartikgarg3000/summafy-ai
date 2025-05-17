import NavLink from "./nav-link";
import { FileText } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
export default function Header() {
    return (
        <>
            <nav className="container flex item-center justify-between py-4 lg:ph-8 px-2 mx-auto">
                <div className="flex lg:flex-1">
                    <NavLink href={"/"}
                        className="flex item-center gap-1"
                    >
                        <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out " />

                        <span className="font-extrabold lg:text-xl text-gray-900">Summafy</span>
                    </NavLink>
                </div>
                <div className="flex lg: justify-center gap-4 lg:gap-12 lg:items-center">
                    <SignedIn>
                        <NavLink href={"/dashboard"}>
                            Your Summaries
                        </NavLink>
                    </SignedIn>
                </div>
                <div className="flex lg: justify-end lg: flex-1">
                    <SignedIn>
                        <div className="flex gap-2 items-center">
                            <NavLink href={"/upload"}>Upload a PDF</NavLink>
                            
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <div className="pt-1">
                            <NavLink href={"/sign-in"}>Sign In</NavLink>
                        </div>
                    </SignedOut>
                </div>

            </nav>
        </>
    )
}