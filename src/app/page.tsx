import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import BackgroundBeamsWithCollision from "@/components/ui/Background";


export default function Home() {
  return (
    
    // <div className="relative min-h-screen">
    
    //   <div className="relative z-10 max-w-screen-lg mx-auto px-4 py-8">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //       {/* Sidebar */}
    //       <Sidebar />
    //       {/* Main Content */}
    //       <main className="md:col-span-2">
    //         <AboutMe />
    //         <Projects />
    //       </main>
    //     </div>
    //   </div>

    // </div>

    // <BackgroundBeamsWithCollision>
    //   <div className="relative z-10 max-w-screen-lg mx-auto px-4 py-8">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //       {/* Sidebar */}
    //       <Sidebar />
    //       {/* Main Content */}
    //       <main className="md:col-span-2">
    //         <AboutMe />
    //         <Projects />
    //       </main>
    //     </div>
    //   </div>
    // </BackgroundBeamsWithCollision>
    <>
    <BackgroundBeamsWithCollision/ >
      <div>
      <div className="absolute inset-0 z-10 max-w-screen-lg mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <Sidebar />
          {/* Main Content */}
          <main className="md:col-span-2">
            <AboutMe />
            <Projects />
          </main>
        </div>
      </div>
      </div>
    </>
      

  );
}
