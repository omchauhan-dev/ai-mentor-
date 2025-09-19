"use client"
import { Menu, User } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Header({ setSidebarOpen, sidebarOpen }) {
  return (
    <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="ml-2 text-xl font-bold text-primary lg:hidden">AI Mentor+</h1>
      </div>

      <div className="flex items-center">
        <Avatar className="h-8 w-8 bg-muted">
          <AvatarFallback className="bg-muted text-muted-foreground">
            <User className="h-4 w-4" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
