import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    Hi, I’m Diksha! 🚀 A passionate full-stack developer and 3D enthusiast, I blend creativity with technical expertise to craft innovative digital experiences. Proficient in the MERN stack, Java, and DSA, I love building dynamic web apps and exploring the world of 3D design. When I’m not coding, you’ll find me hosting poetry events or diving into my favorite anime. Let’s create something amazing together!
                </p>
            </CardContent>
        </Card>
    )
}