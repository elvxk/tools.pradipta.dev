"use client"

import { useState } from "react"
import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

const ToolCard = ({ project }) => {
  const [showFullDesc, setShowFullDesc] = useState(false)

  const words = project.desc.split(" ")
  const isLong = words.length > 20
  const truncated = words.slice(0, 20).join(" ") + " "

  return (
    <Card className="flex justify-between bg-white">
      <CardHeader>
        <Link
          className="flex items-center gap-1 flex-col"
          href={project.demo}
          target="_blank"
        >
          <img src={`${project.demo}/favicon.ico`} height={25} width={25} />
          <CardTitle className="text-lg">{project.title}</CardTitle>
        </Link>
        <CardDescription className="text-justify space-y-1">
          {showFullDesc || !isLong ? project.desc : truncated}
          {isLong && (
            <button
              className="hover:cursor-pointer hover:bg-background"
              variant={"ghost"}
              size={"icon"}
              onClick={() => setShowFullDesc(prev => !prev)}
            >
              {showFullDesc ? "[Less]" : "[More]"}
            </button>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <Link
          href={project.demo}
          className={`w-full ${buttonVariants({ variant: "neutral" })}`}
          target="_blank"
        >
          Open Tool
        </Link>
      </CardContent>
    </Card>
  )
}

export default ToolCard

