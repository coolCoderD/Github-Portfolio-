'use client';

import { Sidebar } from "@/components/Sidebar";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import BackgroundBeamsWithCollision from "@/components/ui/Background";
import CanvasCursor from "@/components/ui/CanvasCursor";


export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision />
      <div>
        <CanvasCursor />
        
        <div className="absolute inset-0 z-20  max-w-screen-lg mx-auto px-4 py-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Sidebar />
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
