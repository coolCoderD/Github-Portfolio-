import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

export const projects = [
    {
        title: "BiTEZ",
        description: "BiTEZ is a MERN-stack-powered food ordering platform offering a seamless user experience to browse, like, and order food online. It features a secure ordering system and an intuitive Admin Panel for efficient menu management.",
        tech: "MERN",
        github: "https://github.com/coolCoderD/BiTEZ",
        link:"https://bi-tez.vercel.app/",
    },
    {
        title: "OCHI",
        description: "OCHI  is a React.js-based website design inspired by award-winning website, featuring seamless animations with Framer Motion, GSAP, and Locomotive Scroll. It offers a stunning user experience with dynamic components and smooth navigation.",
        tech: "React",
        link: "https://ochi98.netlify.app/",
        github:"https://github.com/coolCoderD/Ochi",
    },
    {
        title: "Fabrica 3D",
        description: "Fabrica 3D lets you unleash your creativity by customizing shirts with colors, logos, and AI-generated designs in a dynamic 3D environment.",
        tech: "Three.js",
        link: "https://shirt3d98.netlify.app/",
        github:"https://github.com/coolCoderD/Fabrica-3D",
    },
    {
        title: "Hack Prodigies",
        description: "Hack Prodigies a platform that connects developers through hackathons, events, and coding competitions.",
        tech: "MERN",
        link: "https://hackprodigies.vercel.app/",
    },

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
                    <Card key={i} className=" bg-white/30 backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 ">
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between">
                                <Link
                                    href={p.link}
                                    rel="noopener noreferrer"
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                              {p.github &&
                                <Link href={p.github} target="_blank"  rel="noopener noreferrer">
                                <FaGithub className="inline-block cursor-pointer size-5 ml-2" />
                                </Link>
}
                                </div>
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
                                        rel="noopener noreferrer"
                                        target="_blank"
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