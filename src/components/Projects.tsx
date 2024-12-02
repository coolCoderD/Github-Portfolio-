import Link from "next/link";
import { cn } from "@/lib/utils";

import { CircleCheckBig, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { PiCheckCircleBold } from "react-icons/pi";

export const projects = [
    {
        title: "BiTEZ",
        description: [
            "MERN-stack-powered food ordering platform.",
            "Seamless user experience to browse, like, and order food online.",
            "Features a secure ordering system.",
            "Includes an intuitive Admin Panel for efficient menu management.",
        ],
        tech: "MERN",
        github: "https://github.com/coolCoderD/BiTEZ",
        link: "https://bi-tez.vercel.app/",
    },
    {
        title: "OCHI",
        description: [
            "React.js-based website design inspired by award-winning websites.",
            "Seamless animations using Framer Motion, GSAP, and Locomotive Scroll.",
            "Dynamic components and smooth navigation for an enhanced user experience.",
        ],
        tech: "React",
        link: "https://ochi98.netlify.app/",
        github: "https://github.com/coolCoderD/Ochi",
    },
    {
        title: "Fabrica 3D",
        description: [
            "Customize shirts with colors, logos, and AI-generated designs.",
            "Dynamic 3D environment for interactive customization.",
        ],
        tech: "Three.js",
        link: "https://shirt3d98.netlify.app/",
        github: "https://github.com/coolCoderD/Fabrica-3D",
    },
    {
        title: "Hack Prodigies",
        description: [
            "Platform to connect developers through hackathons.",
            "Host events and participate in coding competitions.",
        ],
        tech: "MERN",
        link: "https://hackprodigies.vercel.app/",
    },
];

const techColors = {
    React: "bg-blue-500",
    "React Native": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Three.js": "bg-yellow-500",
    MERN: "bg-red-500",
};

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card
                        key={i}
                        className=" bg-white/30 backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 "
                    >
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
                                    {p.github && (
                                        <Link
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub className="inline-block cursor-pointer size-5 ml-2" />
                                        </Link>
                                    )}
                                </div>
                                <div className="text-sm text-muted-foreground mt-1 mb-4">
                                    <ul className="list-none pl-4 space-y-2 cursor-pointer">
                                        {p.description.map((item, index) => (
                                            <li key={index} className="p-1 relative group">
                                                <CircleCheckBig
                                                    className="absolute h-4 w-4 text-gray-400 transition-all duration-300 ease-in-out group-hover:text-green-500 group-hover:scale-110"
                                                />
                                                <span
                                                    className="peer ml-5 text-gray-600 transition-all duration-300 ease-in-out group-hover:text-black"
                                                >
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex relative gap-2">
                                        <div
                                            className={cn(
                                                "size-3 absolute inset-0 justify-center animate-ping items-center rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <div
                                            className={cn(
                                                "size-3 justify-center  items-center rounded-full",
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
    );
};
