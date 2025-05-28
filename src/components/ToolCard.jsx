import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ToolCard = ({ project }) => {
  return (
    <Card className="flex justify-between">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-justify">
          {project.desc}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <Link
          href={project.demo}
          className={`w-full ${buttonVariants()}`}
          target="_blank"
        >
          Open Tool
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
