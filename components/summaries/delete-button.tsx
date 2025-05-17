"use client"

import { Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { useState, useTransition } from "react";
import { deleteSummaryAction } from "@/actions/summary-actions";

interface DeleteButtonProps {
    summaryId: string
}

export default function DeleteButton({ summaryId }: DeleteButtonProps) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition()
    const handleDelete = async () => {
        startTransition(async () => {
            const result = await deleteSummaryAction({ summaryId });
            if (!result.success) {
                toast.error("Error", {
                    description: "Failed to delete summary",
                })
            }

            setOpen(false);
        });
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={'ghost'} size="icon" className=" bg-gray-50 border border-gray-200 hover:text-teal-600 hover:bg-teal-300 text-gray-400">
                    <Trash2Icon className="w-4h-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Summary</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this summary? This action cannot be undone.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant={'ghost'} className="px-2 bg-gray-50 border border-gray-200 hover:text-gray-600 hover:bg-gray-100" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant={'destructive'} className="bg-gray-900 hover:bg-gray-600" onClick={handleDelete}>
                        {isPending ? "Deleting" : 'Delete'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>


    )
}