"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Target } from "lucide-react"

const mentorOptions = [
  { value: "web-dev", label: "Web Development Mentor", avatar: "💻" },
  { value: "data-science", label: "Data Science Mentor", avatar: "📊" },
  { value: "general", label: "General Mentor", avatar: "🎓" },
]

export default function MentorSelector({ selectedMentor, onMentorChange }) {
  return (
    <Card className="bg-background border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-card-foreground flex items-center gap-2">
          <Target className="w-4 h-4" />
          Choose Your Mentor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedMentor} onValueChange={onMentorChange}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {mentorOptions.map((mentor) => (
              <SelectItem key={mentor.value} value={mentor.value}>
                <div className="flex items-center gap-2">
                  <span>{mentor.avatar}</span>
                  <span>{mentor.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export { mentorOptions }
