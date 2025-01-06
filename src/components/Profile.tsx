import Link from "next/link";
import Image from "next/image";


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

import {
    Card,
    CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const socials = [
    {
        name: "Github",
        link: "https://github.com/coolCoderD",
        icon: <FaGithub className="size-4" />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/diksha-sharma-1781b8253",
        icon: <FaLinkedin className="size-4" />
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/u/Diksha_Sharma098",
        icon: <FaCode className="size-4" />
    }
    // TODO: Add more socials here
]

export const Profile = () => {
    return (
        <Card className=" bg-background/10 backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100 ">
            <CardContent className="pt-6">
                <div className="flex flex-col items-start gap-2 ">
                    <div className="flex flex-row md:flex-col items-center md:items-start w-full gap-4">
                        <Image
                            width={600}
                            height={600}
                            quality={100}
                            src="https://res.cloudinary.com/drts3ztiy/image/upload/v1731739247/Open_Peeps_-_Avatar_fbephv.png"
                            alt="Profile Picture"
                            className="rounded-full  size-12 md:w-full h-auto object-cover"
                        />
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="font-bold md:mt-4 text-xl md:text-2xl">Diksha Sharma</h1>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Software Developer
                            </p>
                        </div>
                    </div>
                    <Button className="mt-4 w-full" asChild>
                        {/* TODO: Add resume link */}
                        {/* or link to schedule a meeting using Calendly or Cal*/}
                        <Link
                            target="_blank"
                            href="https://drive.google.com/file/d/1gQipreimUeJN2Wa4q3XqBF7euwFU_AkV/view?usp=sharing"
                            className="font-semibold"
                        >
                            CONTACT ME
                        </Link>
                        
                    </Button>
                    <div className="mt-4 flex flex-col space-y-2 border-t border-border pt-4 w-full">
                        {socials.map((s, i) => {
                            return (
                                <Link
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    aria-label={`${s.name} Logo`}
                                    className="cursor-pointer flex items-center gap-2 group"
                                >
                                    {s.icon}
                                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-color duration-200 ease-linear">
                                        {s.name}
                                    </p>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}