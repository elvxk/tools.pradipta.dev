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
        <Link
          className="flex items-center gap-1 flex-col"
          href={project.demo}
          target="_blank"
        >
          <img src={`${project.demo}/favicon.ico`} height={25} width={25} />
          <CardTitle className="text-lg">{project.title}</CardTitle>
        </Link>
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
