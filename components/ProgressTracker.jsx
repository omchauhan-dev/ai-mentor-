"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Award, Target, Clock } from "lucide-react"

export default function ProgressTracker() {
  return (
    <Card className="bg-background border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm text-card-foreground flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Learning Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-card-foreground">Overall Progress</span>
            <span className="text-muted-foreground">40% Complete</span>
          </div>
          <Progress value={40} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
            <Award className="w-4 h-4 text-primary mb-1" />
            <span className="text-sm font-bold text-primary">12</span>
            <span className="text-xs text-card-foreground">Sessions</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
            <Target className="w-4 h-4 text-secondary mb-1" />
            <span className="text-sm font-bold text-secondary">8</span>
            <span className="text-xs text-card-foreground">Skills</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted rounded-lg">
            <Clock className="w-4 h-4 text-accent mb-1" />
            <span className="text-sm font-bold text-accent">24h</span>
            <span className="text-xs text-card-foreground">Time</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
