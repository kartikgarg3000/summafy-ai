import BgComponent from "@/components/common/bg-gradient";
import SummaryCard from "@/components/summaries/summary-card";
import { Button } from "@/components/ui/button";
import { getSummaries } from "@/lib/summary";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { formatDistanceToNow } from 'date-fns'
import EmptySummaryState from "@/components/summaries/empty-summary-state";

export default async function DashboardPage() {
    const user = await currentUser();
    const userId = user?.id
    if (!userId) {
        return redirect('/signin')
    }
    const response = await getSummaries(userId);
    const summaries = response.map((summary) => ({
        ...summary,
        created_at: formatDistanceToNow(new Date(summary.created_at), { addSuffix: true })
    }))
    const valueUploadLimit = 5
    return (
        <main className="min-h-screen min-w-screen ">
            <BgComponent />
            <div className="container max-auto flex flex-col gap-4 ml-2 ">
                <div className="pl-20 pr-20 pt-12 sm:py-24 min-w-[calc(100vw-2vw)]">
                    <div className="flex gap-4 mb-8 justify-between">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">Your Summaries</h1>
                            <p className="text-gray-600">Transform your PDFs into concise, actionable insights</p>
                        </div>
                        <Button variant={'link'} className="transform hover:scale-105 hover:no-underline w-full min-[400px] :w-auto bg-linear-to-r from-teal-800 to-teal-500 hover:from-teal-500 hover:mask-r-to-slate-900 hover:text-white text-white transition duration-350 flex items-center justify-center">
                            <Link href={"/upload"} className="flex text-white items-center"><Plus className="w-5 h-5 mr-2" />New Summary</Link>
                        </Button>
                    </div>
                    <div className="mb-6">
                        <div className="bg-teal-100 border border-teal-200 rounded-lg p-4 text-teal-800">
                        
                        </div>
                    </div>

                    {summaries.length === 0 ? <EmptySummaryState /> : (
                        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 sm:px-0">
                            {summaries.map((summary, index) => (
                                <SummaryCard key={index} summary={summary} created_At={summaries[index].created_at} />
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </main>
    )
}