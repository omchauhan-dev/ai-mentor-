"use client"

import { Menu, Bell, User, Search } from "lucide-react"

export default function Header({ setSidebarOpen, sidebarOpen }) {
  return (
    <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
      {/* Left side - Mobile menu button */}
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex items-center ml-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search mentors, topics..."
              className="pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent w-64"
            />
          </div>
        </div>
      </div>

      {/* Right side - User actions */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <button className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
        </button>

        {/* User profile */}
        <button className="flex items-center space-x-2 p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="hidden md:block text-sm font-medium text-foreground">Alex Chen</span>
        </button>
      </div>
    </header>
  )
}
