"use client"

import { BookOpen, Users, MessageCircle, TrendingUp, Clock, Award } from "lucide-react"

export default function Dashboard() {
  const stats = [
    { label: "Learning Hours", value: "24.5", icon: Clock, color: "text-primary" },
    { label: "Mentors Connected", value: "8", icon: Users, color: "text-secondary" },
    { label: "Sessions Completed", value: "12", icon: MessageCircle, color: "text-accent" },
    { label: "Skills Improved", value: "5", icon: Award, color: "text-chart-3" },
  ]

  const recentSessions = [
    { mentor: "Dr. Sarah Johnson", topic: "Machine Learning Fundamentals", date: "2 hours ago", status: "completed" },
    { mentor: "Prof. Michael Chen", topic: "Data Structures & Algorithms", date: "1 day ago", status: "completed" },
    { mentor: "Lisa Rodriguez", topic: "React Best Practices", date: "3 days ago", status: "completed" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-border">
        <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back, Alex! 👋</h1>
        <p className="text-muted-foreground">
          Ready to continue your learning journey? You have 2 new mentor recommendations.
        </p>
        <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Start Learning Session
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Sessions */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Recent Sessions</h2>
          <button className="text-primary hover:text-primary/80 text-sm">View All</button>
        </div>
        <div className="space-y-3">
          {recentSessions.map((session, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{session.topic}</p>
                  <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{session.date}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                  {session.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <Users className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Find Mentors</h3>
          <p className="text-sm text-muted-foreground">Discover experts in your field of interest</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <MessageCircle className="h-8 w-8 text-secondary mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Start Chat</h3>
          <p className="text-sm text-muted-foreground">Begin a conversation with your mentors</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <TrendingUp className="h-8 w-8 text-accent mb-3" />
          <h3 className="font-semibold text-foreground mb-1">Track Progress</h3>
          <p className="text-sm text-muted-foreground">Monitor your learning achievements</p>
        </div>
      </div>
    </div>
  )
}
