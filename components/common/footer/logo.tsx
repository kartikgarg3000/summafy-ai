import { CircleUserRound } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2">
      <CircleUserRound className="h-8 w-8 text-primary" />
      <span className="font-medium text-lg">Kartik Garg</span>
    </div>
  )
}