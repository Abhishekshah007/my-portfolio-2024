import "../Projects/style.css";
import PrevSlideButton from "../components/prevSlideButton/Button";
import NextSlideButton from "../components/nextSlideButton/Button";
import Image from "next/image";
import blogbc from "../../../public/images/blogbc.png";
import afrs from "../../../public/images/afrs.png";
import nextauth from "../../../public/images/nextauth.png";

export default function Page() {
    return (
        <>
            <div className="prevSlideBtn">
                <PrevSlideButton />
            </div>

            <div className="nextSlideBtn">
                <NextSlideButton urlPath="/Experience" />
            </div>

            <div className="container mx-auto p-8 mt-10">
                <div className="textbox text-5xl font-extrabold text-center mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 delay-500 animate-bounce">
                        Project Glimpse
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
                    {/* Project 1 */}
                    <div className="project-card shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 bg-white">
                        <Image src={afrs} alt="Applied Forensic Research Sciences" className="w-full h-48 object-cover rounded mb-4" />
                        <h3 className="text-2xl font-bold text-center text-blue-500 mb-4">
                            Applied Forensic Research Sciences
                        </h3>
                        <p className="text-gray-600 text-center">
                            A groundbreaking platform delivering in-depth forensic insights for academic and professional research.
                        </p>
                        <a 
                            href="https://www.appliedforensicresearchsciences.in/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link block mt-4 text-center text-blue-600 font-semibold"
                        >
                            Visit Project
                        </a>
                    </div>

                    {/* Project 2 */}
                    <div className="project-card shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 bg-white">
                        <Image src={blogbc} alt="BloggerBC" className="w-full h-48 object-cover rounded mb-4" />
                        <h3 className="text-2xl font-bold text-center text-blue-500 mb-4">
                            BloggerBC
                        </h3>
                        <p className="text-gray-600 text-center">
                            An innovative blogging platform that merges creativity and technology, empowering writers to share their voice.
                        </p>
                        <a 
                            href="https://www.bloggerbc.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link block mt-4 text-center text-blue-600 font-semibold"
                        >
                            Visit Project
                        </a>
                    </div>

                    {/* Project 3 */}
                    <div className="project-card shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 bg-white">
                        <Image src={nextauth} alt="Next Auth System" className="w-full h-48 object-cover rounded mb-4" />
                        <h3 className="text-2xl font-bold text-center text-blue-500 mb-4">
                            Next Auth System
                        </h3>
                        <p className="text-gray-600 text-center">
                            A robust authentication system built with Next.js to enhance security and user experience for modern web apps.
                        </p>
                        <a 
                            href="https://next-auth-system-coral.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link block mt-4 text-center text-blue-600 font-semibold"
                        >
                            Visit Project
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
