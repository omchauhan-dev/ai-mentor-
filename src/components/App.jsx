"use client"

import { useState } from "react"
import Sidebar from "./layout/Sidebar"
import Header from "./layout/Header"
import Dashboard from "./pages/Dashboard"
import MentorSelection from "./pages/MentorSelection"
import Chat from "./pages/Chat"
import Settings from "./pages/Settings"

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedMentor, setSelectedMentor] = useState(null)

  const handleStartLearningSession = (mentor) => {
    setSelectedMentor(mentor)
    setCurrentPage("chat")
    setSidebarOpen(false) // Close sidebar when navigating to chat
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "mentors":
        return <MentorSelection onStartLearningSession={handleStartLearningSession} />
      case "chat":
        return <Chat selectedMentor={selectedMentor} />
      case "settings":
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-muted/30">
        <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-muted/30">{renderPage()}</main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
