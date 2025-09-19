"use client"

import { Star, Clock, MessageCircle } from "lucide-react"

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    expertise: "Machine Learning & AI",
    rating: 4.9,
    sessions: 150,
    avatar: "SJ",
    description: "PhD in Computer Science with 10+ years in ML research",
    specialties: ["Deep Learning", "Neural Networks", "Computer Vision"],
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    expertise: "Data Structures & Algorithms",
    rating: 4.8,
    sessions: 200,
    avatar: "MC",
    description: "Professor at Stanford, competitive programming expert",
    specialties: ["Algorithms", "System Design", "Problem Solving"],
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    expertise: "Frontend Development",
    rating: 4.7,
    sessions: 120,
    avatar: "LR",
    description: "Senior Frontend Engineer at Google",
    specialties: ["React", "TypeScript", "UI/UX Design"],
  },
]

export default function MentorSelection({ onStartLearningSession }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Find Your Perfect Mentor</h1>
        <p className="text-muted-foreground">Connect with experts who can guide your learning journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                {mentor.avatar}
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-foreground">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">{mentor.expertise}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">{mentor.description}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="ml-1 text-sm font-medium">{mentor.rating}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {mentor.sessions} sessions
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {mentor.specialties.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onStartLearningSession(mentor)}
              className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Start Session
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
