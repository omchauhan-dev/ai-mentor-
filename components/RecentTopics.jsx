"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target } from "lucide-react"

const recentTopics = [
  { name: "React Hooks", color: "primary" },
  { name: "JavaScript ES6", color: "secondary" },
  { name: "CSS Grid Layout", color: "accent" },
]

export default function RecentTopics() {
  return (
    <Card className="bg-background border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-card-foreground flex items-center gap-2">
          <Target className="w-4 h-4" />
          Recent Topics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {recentTopics.map((topic, index) => (
            <div
              key={index}
              className={`text-xs p-2 bg-${topic.color}/10 text-${topic.color} rounded border-l-2 border-${topic.color}`}
            >
              {topic.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
