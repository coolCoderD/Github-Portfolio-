import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "BiTEZ",
        description: "BiTEZ is a MERN-stack-powered food ordering platform offering a seamless user experience to browse, like, and order food online. It features a secure ordering system and an intuitive Admin Panel for efficient menu management.",
        tech: "MERN",
        link: "https://github.com/coolCoderD/BiTEZ",
    },
    {
        title: "OCHI",
        description: "OCHI  is a React.js-based website design inspired by award-winning website, featuring seamless animations with Framer Motion, GSAP, and Locomotive Scroll. It offers a stunning user experience with dynamic components and smooth navigation.",
        tech: "React",
        link: "https://ochi98.netlify.app/",
    },
    {
        title: "Fabrica 3D",
        description: "Fabrica 3D lets you unleash your creativity by customizing shirts with colors, logos, and AI-generated designs in a dynamic 3D environment.",
        tech: "Three.js",
        link: "https://shirt3d98.netlify.app/",
    },
    // {
    //     title: "AI Chatbot",
    //     description: "A machine learning powered chatbot using Python and TensorFlow",
    //     tech: "Python",
    //     link: "#",
    // },
]

const techColors = {
    "React": "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Three.js": "bg-yellow-500",
    "MERN": "bg-red-500",
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                    <Link
                                        href={p.link}
                                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                                    >
                                        View Project
                                        <ExternalLink className="inline-block size-3" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}