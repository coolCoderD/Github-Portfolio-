import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["TypeScript", "JavaScript", "Python", "Java",  "C++", "C", "SQL", "HTML", "CSS", "TailwindCSS", "NextJS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB",  "Git", "ThreeJS","GSAP","Framer Motion"]

export const Skills = () => {
    return (
        <Card className="mt-6  bg-white/30 backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 ">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}