import { ExternalLink, FileText } from "lucide-react";
import { Button } from "../ui/button";
import DownloadSummaryButton from "./download-summary-button";

export default function SourceInfo({ fileName, 
    original_fileUrl, 
    title, 
    summary_text, 
    createdAt }: 
    { fileName: string; 
      original_fileUrl: string; 
      title: string; 
      summary_text: string; 
      createdAt: string }) {
    return (
       <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
            <FileText className="h-4 w-4 text-teal-400" />
            <span>Source: {fileName}</span>
        </div>
        <div className="flex gap-2">
            <Button variant={"ghost"} size={"sm"} className="h-8 px-3 text-teal-600 hover:text-teal-700 hover:bg-teal-50" asChild>
                <a href={original_fileUrl} target="_blank" rel="nooopner noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Original
                </a>
            </Button>
            <DownloadSummaryButton 
                title={title}
                summary_text={summary_text}
                fileName={fileName}
                createdAt={createdAt}
            />
        </div>
       </div>
    )
}